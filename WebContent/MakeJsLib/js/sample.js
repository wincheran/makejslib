/**
 * 
 */

window.onload = function() {
}

// 통신 관련 객체 (Javascript)
var Communication = {
	/**
	 * get 방식을 사용하여 서버에 데이터 요청하기.
	 * url : 데이터를 요청할 스크립트 주소.
	 * callback : 콜백할 함수.
	 */
	getText: function(url, callback){
		var request = new XMLHttpRequest(); // 새 요청 객체 생성한다.
		request.open('GET', url); // 가져올 URL 지정한다.
		
		// 이벤트 핸들러 정의한다.
		request.onreadystatechange = function() {
			// 요청이 성공적으로 끝난 경우.
			if(request.readyState === 4 && request.status === 200) {
				var type = request.getResponseHeader('Content-type');
				if(type.match(/^text/))
					callback(request.responseText); // 콜백으로 전달한다.
			}
		};
		request.send(null);
	},
	
	/**
	 * post 방식을 사용하여 서버로 문자열 보내기.
	 * url : 전달할 서버측 스크립트 주소.
	 * msg : 전달할 내용.
	 */
	postMessage: function(url, msg) {
		var request = new XMLHttpRequest(); // 새 요청 객체를 생성한다.
		request.open('POST', url); // post 요청을 보낼 서버 측 스크립트를 설정한다.
		
		// 요청 본문을 일반 텍스트 메시지로 받도록 설정한다.
		request.setRequestHeader('Content-Type', 'text/plain; charset=UTF-8'); // 요청 본문은 일반 텍스트다.
		request.send(msg); // 요청 본문을 msg로 전송한다.
	} 
}

// 통신 관련 객체 (jQuery)
var jCommunication = {
	/**
	 * oParam : ajax 요청에 필요한 옵션을 가진 객체
	 */
	ajax: function(oParam){
		// 필수 옵션 존재 여부 체크 메서드
		function existAjaxDefaultOption(oParam){
			var aDefaultOptionName = ['type', 'url', 'data', 'dataType', 'success'];
			var aTemp = [];
			Object.keys(oParam).forEach(function(key){
				// 해당 키가 디폴트 옵션이면서, 추가된 배열(aTemp)에 중복이 없으면
				if($.inArray(key, aDefaultOptionName) !== -1 && $.inArray(key, aTemp) === -1){
					aTemp.push(key);
				}
			});
			return true;
		}
	
		// Ajax 요청에 필요한 옵션 객체 얻는 메서드
		function getAjaxOptionObject(oParam){
			var aOptionName = [
				'type', 'url', 'data', 'dataType', 'success'
			]; // todo 추가적으로 옵션명 넣어 줘야 함. (많아서 패스..)
			
			var oTemp = {};
			oTemp['type'] = oParam['type'];
			Object.keys(aOptionName).forEach(function(key){
				oTemp[aOptionName[key]] = oParam[aOptionName[key]];
			})
			return oTemp;
		}
		
		if(!existAjaxDefaultOption(oParam)){
			return false;
		}
		
		oParam = getAjaxOptionObject(oParam);
		 
		// 3. ajax 요청.
		$.ajax(oDefaultParam);
	},

}










