let map, ps, infowindow;
let markers = [];
const BAEKSEOK_COORD = new kakao.maps.LatLng(36.8393, 127.1859); 

window.onload = function() {
    const mapContainer = document.getElementById('general-map'); 
    if (!mapContainer) return;

    map = new kakao.maps.Map(mapContainer, {
        center: BAEKSEOK_COORD,
        level: 4
    });
    
    ps = new kakao.maps.services.Places();
    infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    const chips = document.querySelectorAll('.part-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', function() {
            chips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            searchHospital(this.getAttribute('data-keyword'));
        });
    });

    // 초기 실행
    searchHospital('내과');
};

function searchHospital(category) {
    if (!category || !ps) return;
    infowindow.close();

    const options = {
        location: BAEKSEOK_COORD,
        radius: 8000, // 4km로 확대하여 신부동까지 포함
        sort: kakao.maps.services.SortBy.DISTANCE
    };

    ps.keywordSearch(`천안 ${category}`, (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
            displayPlaces(data);
        } else {
            document.getElementById('hospital-list').innerHTML = '<p class="list-empty">검색 결과가 없습니다.</p>';
            removeMarkers();
        }
    }, options);
}

function displayPlaces(places) {
    removeMarkers();
    const bounds = new kakao.maps.LatLngBounds();
    const listEl = document.getElementById('hospital-list');
    listEl.innerHTML = ''; 

    places.forEach((place) => {
        const markerPosition = new kakao.maps.LatLng(place.y, place.x);
        const marker = new kakao.maps.Marker({
            position: markerPosition,
            map: map
        });

        // 리스트 카드 생성
        const itemEl = document.createElement('div');
        itemEl.className = 'hospital-item';
        itemEl.innerHTML = `
            <h3>${place.place_name}</h3>
            <p>📍 ${place.road_address_name || place.address_name}</p>
            <p>📞 ${place.phone || '번호 정보 없음'}</p>
            <span class="distance">백석대에서 약 ${place.distance}m</span>
        `;

        // 카드 클릭 시 지도를 해당 위치로 이동 및 정보창 표시
        itemEl.onclick = () => {
            map.panTo(markerPosition);
            infowindow.setContent(`<div style="padding:10px;font-size:12px;font-weight:600;">${place.place_name}</div>`);
            infowindow.open(map, marker);
        };

        listEl.appendChild(itemEl);
        markers.push(marker);
        bounds.extend(markerPosition);
    });

    map.setBounds(bounds);
}

function removeMarkers() {
    markers.forEach(m => m.setMap(null));
    markers = [];
}