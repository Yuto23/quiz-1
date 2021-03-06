  
const quiz = [
    {
      question: '英語で「雑学」はなんという？',
      answers: [ 'Timber', 'Trivia', 'Chance', 'Waltz'],
      correct: 'Trivia'
    }, {
      question: '英語で通じない単語はどれ？',
      answers: [ 'アルバイト', 'カフェ', 'Wi-Fi', 'ドリル'],
      correct: 'アルバイト'
    }, {
      question: 'イギリス英語は「ゴミ」はどれ？',
      answers: [ 'fade', 'chicken', 'rubbish', 'pancake'],
      correct: 'rubbish'
    }
  ];
  
  const $window = window;
  const $doc = document;
  const $question = $doc.getElementById('js-question');
  const $buttons = $doc.querySelectorAll('.btn');
  
  const quizLen = quiz.length;
  let quizCount = 0;
  let score = 0;
  
  const init = () => {
    $question.textContent = quiz[quizCount].question;
    
    const buttonLen = $buttons.length;
    let btnIndex = 0;
    
    while(btnIndex < buttonLen){
      $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
      btnIndex++;
    }
  };
  
  const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      // $window.alert('クイズ終了！');
      showEnd();
    }
  };
  
  const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
      $window.alert('すごいっ！正解です!');
      score++;
    } else {
      $window.alert('残念！不正解のようです!');
    }
    goToNext();
  };
  
  const showEnd = () => {
    $question.textContent = '終了です！あなたのスコアは' + score + '/' + quizLen + 'でした！';
    
    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
  };
  
  init();
  
  let answersIndex = 0;
  let answersLen = quiz[quizCount].answers.length;

  while(answersIndex < answersLen){
    $buttons[answersIndex].addEventListener('click', (e) => {
      judge(e.target);
    });
    answersIndex++;
  }