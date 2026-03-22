let map, ps, infowindow;
let markers = []; // 이전 마커들을 관리하기 위한 배열

document.addEventListener('DOMContentLoaded', () => {
  // 1. HTML의 ID 'general-map'과 일치 확인
  const mapContainer = document.getElementById('general-map'); 
  
  if (!mapContainer) {
    console.error("지도를 담을 'general-map' 엘리먼트를 찾을 수 없습니다.");
    return;
  }

  const mapOption = {
    center: new kakao.maps.LatLng(36.8393, 127.1859), // 백석대학교
    level: 4
  };
  
  map = new kakao.maps.Map(mapContainer, mapOption);
  ps = new kakao.maps.services.Places();
  infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  // 2. 진료과목 칩(Chip) 클릭 이벤트 연결
  const chips = document.querySelectorAll('.part-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', function() {
      // 모든 칩에서 active 제거 후 클릭한 것만 추가
      chips.forEach(c => c.classList.remove('active'));
      this.classList.add('active');

      const keyword = this.getAttribute('data-keyword');
      searchHospital(keyword);
    });
  });
});

// 백석대 주변 검색 함수
function searchHospital(category) {
  if (!category) return;

  const options = {
    location: new kakao.maps.LatLng(36.8393, 127.1859),
    radius: 2000, 
    sort: kakao.maps.services.SortBy.DISTANCE
  };

  ps.keywordSearch(`백석대 ${category}`, placesSearchCB, options);
}

function placesSearchCB(data, status) {
  if (status === kakao.maps.services.Status.OK) {
    displayPlaces(data);
  } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
    alert('백석대 주변에 해당 진료기관이 없습니다.');
  } else {
    alert('검색 중 오류가 발생했습니다.');
  }
}

function displayPlaces(places) {
  removeMarkers(); // 기존 마커 싹 지우기
  
  const bounds = new kakao.maps.LatLngBounds();
  
  places.forEach((place) => {
    const placePosition = new kakao.maps.LatLng(place.y, place.x);
    const marker = new kakao.maps.Marker({
      position: placePosition,
      map: map
    });

    // 마커 클릭 시 정보창 표시
    kakao.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(`<div style="padding:10px;font-size:12px;font-weight:bold;">${place.place_name}</div>`);
      infowindow.open(map, marker);
    });

    markers.push(marker);
    bounds.extend(placePosition);
  });

  map.setBounds(bounds);
}

function removeMarkers() {
  markers.forEach(m => m.setMap(null));
  markers = [];
}