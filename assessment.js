/**
 *
 */
(function(){
	'use strict';
	const userNameInput = document.getElementById('user-name');
	const assessmentButton = document.getElementById('assessment');
	const resultDivided = document.getElementById('result-area');
	const tweetDivided = document.getElementById('tweet-area');
	function removeAllChildren(element){
		while (resultDivided.firstChild){
			resultDivided.removeChild(resultDivided.firstChild);
		}

	}

	assessmentButton.onclick = () => {
		const userName = userNameInput.value;
		if (userName.length === 0){
			return;
		}

		removeAllChildren(resultDivided);
		const header = document.createElement('h3');
		header.innerText = '診断結果';
		resultDivided.appendChild(header);

		const paragraph = document.createElement('p');
		const result = assessment(userName);
		paragraph.innerText = result;
		resultDivided.appendChild(paragraph);

	};
	const answers = [
		'{userName}のいいところは声です。',
		'{userName}のいいところはまなざしです。',
		'{userName}のいいところは情熱です。',
		'{userName}のいいところは厳しさです。',
		'{userName}のいいところは知識です。',
		'{userName}のいいところはユニークさです。',
		'{userName}のいいところは用心深さです。',
		'{userName}のいいところは見た目です。',
		'{userName}のいいところは決断力です。',
		'{userName}のいいところは思いやりです。',
		'{userName}のいいところは感受性です。',
		'{userName}のいいところは節度です。',
		'{userName}のいいところは好奇心です。',
		'{userName}のいいところは気配りです。'

	];
	function assessment(userName) {
		let sum0fcharCode = 0;
		for (let i = 0; i < userName.length; i++){
			sum0fcharCode = sum0fcharCode + userName.charCodeAt(i);
		}
		const index = sum0fcharCode % answers.length;
		let result = answers[index];
		result = result.replace(/\{userName\}/g, userName);
		return result;
	}

	console.log(assessment('太郎'));
	console.log(assessment('次郎'));
	console.log(assessment('太郎'));
})();
