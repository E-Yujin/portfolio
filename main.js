let text = ['JAVA', 'Android', 'JavaScript', 'HTML/CSS', 'MySQL'];

let s = $(".slider"),
sWrapper = s.find(".slider__wrapper"),
sItem = s.find(".slide"),
btn = s.find(".slider__link"),
sWidth = sItem.width(),
sCount = sItem.length,
slide_date = s.find(".slide__date"),
slide_title = s.find(".slide__title"),
slide_text = s.find(".slide__text"),
slide_more = s.find(".slide__more"),
slide_image = s.find(".imgAndAnnounce"),
sTotalWidth = sCount * sWidth;

let fir_titles = ['핼러윈 방 탈출 RPG','로그인', '게임 상태 Save 및 load', '캐릭터 조작 및 스토리 진행', '랭크 갱신 및 화면 출력'];
let fir_texts = ['목적: 비대면 상황에서도 자유도가 높은 학생회 행사를 제공하기 위해 제작.<br>기획: 개발이 완료되는 시점인 10월 말의 \'핼러윈 데이\'를 기반으로 시나리오 작업.<br>역할: 시나리오, 퀴즈, UI 디자인 외 게임 기능 구현.',
	'참여 가능 재학생 DB에 존재하는 이름 및 학번으로만 접속 가능.<br>한 번 로그인하면 이후 자동 로그인.',
	'게임 도중 언제든 저장 가능.<br>메인화면에서 저장한 지점부터 이어서 플레이.',
	'방향키, 실행 버튼으로 간편 조작.<br>대화창으로 대화 진행 및 퀴즈 정답 입력.',
	'클리어한 순서대로 랭크 구성 및 갱신.<br>게임 클리어 시 갱신된 랭크 화면에 출력.'];
let fir_imgs = ['project_img/RPG/halloween_main.png','project_img/RPG/halloween_login.png', 
	'project_img/RPG/halloween_save.png', 
	'project_img/RPG/halloween_play.png', 'project_img/RPG/halloween_rank.png'];

let sc_titles = ['기억돔','사용자 정보', '정규∙간이 검사', '검사 결과 기록 및 시각화',
'대화형 AI \'돔이\'', '정보탭', '기억력 향상 퀴즈'];
let sc_texts = ['목적: 치매 검사를 주기적으로 시행해 치매를 예방 또는 진행을 더디게 함.<br>기획: CIST(인지선별검사) 진단 척도를 사용해 인증된 검사 품질을 제공.<br>역할: TTS 및 STT 구현, 캐릭터 디자인 및 애니메이팅, 대화형 AI 구현, 정규 검사 및 간이 검사 일부 구현, 주변 치매 센터 및 병원 탐색 구현.',
	'사용자 정보를 받아 나이, 학력을 고려한 검사 결과를 도출.',
	'6가지의 검사 항목을 순차적으로 진행하여 치매 진단 검사를 실시.',
	'검사가 끝나면 검사 결과를 시각화하여 볼 수 있으며, 메인 화면의 \'기록\'탭에서 시간에 따른 결과 변화를 그래프로 확인 가능.',
	'일상 대화뿐만 아니라 주기적으로 사용자에게 질문하며 사용자의 기억을 상기시킴.대화 도중 명령을 통해 검사 화면이나 기억력 향상 퀴즈 화면으로 전환 가능.', 
	'치매에 관한 정보를 제공하고 주변에 가까운 치매 센터나 병원을 탐색.', 
	'제한된 시간 안에 초성에 맞는 단어를 추론하는 퀴즈를 진행.'];
let sc_imgs = ['project_img/dementia/main.png','project_img/dementia/user_info.png', 
	'project_img/dementia/test.png', 
	'project_img/dementia/result.png', 'project_img/dementia/ai.png',
	'project_img/dementia/info_tab.png', 'project_img/dementia/quiz.jpg'];
	
let fir_detailBtn = s.find(".fir__img");
let scd_detailBtn = s.find(".second__img");

let clickCnt = 0;
let clickCount = 0;

let index = 0;


$(document).ready(function(){
	let pjBtn = $('.proj__btn'),
	abBtn = $('.about__btn');

	abBtn.on("click", function(e){
		e.preventDefault();
		$('html, body').animate({ scrollTop : 0}, 350);
	})

	pjBtn.on("click", function(e){
		e.preventDefault();
		$('html, body').animate({ scrollTop : $('.slider').offset().top}, 350);
	})
});

setInterval(function() {
	$("#intro__title").text(text[index]);
	document.head.appendChild(document.createElement("style"))
		.innerHTML = ".profile .title #intro__title::before {content: \""
		+ text[index] + "\";}";
	document.head.appendChild(document.createElement("style"))
		.innerHTML = ".profile .title #intro__title::after {content: \""
		+ text[index] + "\";}";
	index = (index + 1) % 5;
}, 2000);

setTimeout(() =>  document.head.appendChild(document.createElement("style"))
.innerHTML = ".profile #second{visibility: visible;}" ,400);

setTimeout(() =>  document.head.appendChild(document.createElement("style"))
.innerHTML = ".profile #third{visibility: visible;}" ,1400);

setTimeout(() =>  document.head.appendChild(document.createElement("style"))
.innerHTML = ".profile #forth{visibility: visible;}" ,2400);

setTimeout(() =>  document.head.appendChild(document.createElement("style"))
.innerHTML = ".profile #fifth{visibility: visible;}" ,3400);

$(document).ready(function () {
	let name = $(".name"),
		birth = $(".birth"),
		mail = $(".mail"),
		gradu = $(".gradu"),
		circle = $(".backCircle"),
		profile_img = $(".info img");

	let fromProperties = { autoAlpha: 0, x: "50"};
	let toProperties = { autoAlpha: 1, x: "0"};

	TweenLite.fromTo(
		circle,1,
		{ autoAlpha: 0},
		{ autoAlpha: 1}
	);

	TweenLite.fromTo(
		profile_img,1,
		{ autoAlpha: 0, y: "40" },
		{ autoAlpha: 1, y: "0" }
	);

	TweenLite.fromTo(name, 0.5, fromProperties, toProperties);
	TweenLite.fromTo(birth, 0.7, fromProperties, toProperties);
	TweenLite.fromTo(mail, 0.9, fromProperties, toProperties);
	TweenLite.fromTo(gradu, 1.1, fromProperties, toProperties);
});

$(document).ready(function () {

	sWrapper.css("width", sTotalWidth);
	sWrapper.css("width", sTotalWidth);
	
	
	
	btn.on("click", function (e) {
		e.preventDefault();
		
		if ($(this).hasClass("next")) {
			clickCount < sCount - 1 ? clickCount++ : (clickCount = 0);
		} else if ($(this).hasClass("prev")) {
			clickCount > 0 ? clickCount-- : (clickCount = sCount - 1);
		}
		TweenMax.to(sWrapper, 0.4, { x: "-" + $('.slide').innerWidth() * clickCount });

	//CONTENT ANIMATIONS
	
		let fromProperties = { autoAlpha: 0, x: "-50", y: "-10" };
		let toProperties = { autoAlpha: 0.8, x: "0", y: "0" };

		TweenLite.fromTo(
			slide_image,1,
			{ autoAlpha: 0, y: "40" },
			{ autoAlpha: 1, y: "0" }
		);

		TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
		TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
		TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
		TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

		getOrigin(".fir__project", ".fir__text", ".fir__img img", 
		fir_titles, fir_texts, fir_imgs);
		getOrigin(".second__project", ".second__text", ".second__img img", 
		sc_titles, sc_texts, sc_imgs);
		clickCnt = 0;
	})

	fir_detailBtn.on("click", function (e) {
		e.preventDefault();
		nextInfo(".fir__project", ".fir__text", ".fir__img img", 
		fir_titles, fir_texts, fir_imgs, 4);
	})

	scd_detailBtn.on("click", function (e) {
		e.preventDefault();
		nextInfo(".second__project", ".second__text", ".second__img img", 
		sc_titles, sc_texts, sc_imgs, 6);
	})
});

let delay = 1000;
let timer = null;

$(window).on('resize',  function(){
	timer = setTimeout(function(){
		console.log($('.slide').width());
		TweenMax.to(sWrapper, 0.4, { x: "-" + $('.slide').innerWidth() * clickCount });
	}, delay);
});

function nextInfo(e_title, e_txt, e_img, a_title, a_txt, a_img, cnt) {
	
	let title = s.find(e_title),
	text = s.find(e_txt),
	image = s.find(e_img);

	if(clickCnt >= cnt) clickCnt = 0;
	else clickCnt++;


	title.text(a_title[clickCnt]);
	text.html(a_txt[clickCnt]);
	image.attr("src", a_img[clickCnt]);
}

function getOrigin(e_title, e_txt, e_img, a_title, a_txt, a_img){
	s.find(e_title).text(a_title[0]);
	s.find(e_txt).html(a_txt[0]);
	s.find(e_img).attr("src", a_img[0]);
}

$(".overlay").addClass("overlay__blue");