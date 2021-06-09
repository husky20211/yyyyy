window.onload = function (e) {
    liff.init((data)=>{
		var urlParams = new URLSearchParams(window.location.search);
		liff.sendMessages([
			{
				type:'template',
				altText:'template message',
				template: JSON.parse(urlParams.get('template'))
			}
		]);
    liff.closeWindow();
	});
};