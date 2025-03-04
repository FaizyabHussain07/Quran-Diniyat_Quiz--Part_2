// Quiz questions data
const quizQuestions = [
    {
      question: "اصول دین کتنے ہیں؟",
      options: ["3", "4", "5", "6"],
      correctAnswer: 2,
      explanation: "اصول دین 5 ہیں: توحید، عدل، نبوت، امامت، معاد۔",
    },
    {
      question: "فروع دین کتنے ہیں؟",
      options: ["7", "9", "10", "12"],
      correctAnswer: 2,
      explanation: "فروع دین 10 ہیں: نماز، روزہ، حج، زکات، خمس، جہاد، امر بالمعروف، نہی عن المنکر، تولی، تبری۔",
    },
    {
      question: "نماز کی کتنی رکعات واجب ہیں؟",
      options: ["10", "13", "17", "20"],
      correctAnswer: 2,
      explanation: "روزانہ 17 رکعات واجب ہیں: فجر 2، ظہر 4، عصر 4، مغرب 3، عشاء 4۔",
    },
    {
      question: "وضو میں سب سے پہلے کیا دھونا چاہیے؟",
      options: ["پاؤں", "ہاتھ", "چہرہ", "کہنیاں"],
      correctAnswer: 1,
      explanation: "وضو میں سب سے پہلے ہاتھوں کو دھونا چاہیے۔",
    },
    {
      question: "امام حسن عسکری (ع) کے بیٹے کون ہیں؟",
      options: ["امام جعفر صادق (ع)", "امام علی نقی (ع)", "امام محمد تقی (ع)", "امام مہدی (عج)"],
      correctAnswer: 3,
      explanation: "امام حسن عسکری (ع) کے بیٹے امام مہدی (عج) ہیں جو بارہویں امام ہیں۔",
    },
    {
      question: "قرآن میں کتنی سورتیں ہیں؟",
      options: ["110", "114", "120", "130"],
      correctAnswer: 1,
      explanation: "قرآن مجید میں کل 114 سورتیں ہیں۔",
    },
    {
      question: "نماز فجر میں کتنی رکعات ہوتی ہیں؟",
      options: ["2", "3", "4", "5"],
      correctAnswer: 0,
      explanation: "نماز فجر میں 2 رکعات ہوتی ہیں۔",
    },
    {
      question: "آیت الکرسی کس سورت میں ہے؟",
      options: ["سورہ فاتحہ", "سورہ اخلاص", "سورہ بقرہ", "سورہ الناس"],
      correctAnswer: 2,
      explanation: "آیت الکرسی سورہ بقرہ میں ہے، جو قرآن کی سب سے بڑی سورت ہے۔",
    },
    {
      question: "اہل بیت (ع) کتنے ہیں؟",
      options: ["4", "5", "3", "10"],
      correctAnswer: 1,
      explanation: "اہل بیت (ع) 5 ہیں: حضرت محمد (ص)، حضرت علی (ع)، حضرت فاطمہ (س)، امام حسن (ع)، امام حسین (ع)۔",
    },
    {
      question: "اسلامی سال کے پہلے مہینے کا نام کیا ہے؟",
      options: ["صفر", "ذوالحجہ", "محرم", "شعبان"],
      correctAnswer: 2,
      explanation: "اسلامی سال کا پہلا مہینہ محرم ہے۔",
    },
    {
      question: "قرآن میں سب سے بڑی سورت کون سی ہے؟",
      options: ["سورہ یٰسین", "سورہ النساء", "سورہ آل عمران", "سورہ بقرہ"],
      correctAnswer: 3,
      explanation: "قرآن میں سب سے بڑی سورت سورہ بقرہ ہے جس میں 286 آیات ہیں۔",
    },
    {
      question: "وضو میں مسح کہاں کیا جاتا ہے؟",
      options: ["ہاتھ پر", "پاؤں اور سر پر", "کندھے پر", "کمر پر"],
      correctAnswer: 1,
      explanation: "وضو میں مسح سر اور پاؤں پر کیا جاتا ہے۔",
    },
    {
      question: "امام جعفر صادق (ع) کون سے نمبر والے امام ہیں؟",
      options: ["چوتھے", "پانچویں", "چھٹے", "ساتویں"],
      correctAnswer: 2,
      explanation: "امام جعفر صادق (ع) چھٹے امام ہیں۔",
    },
    {
      question: "جبرائیل (ع) کون سے فرشتہ ہیں؟",
      options: ["وحی لانے والے", "موت کے فرشتہ", "جنت کے دروازے کے فرشتہ", "بارش کے فرشتہ"],
      correctAnswer: 0,
      explanation: "جبرائیل (ع) وحی لانے والے فرشتہ ہیں جنہوں نے پیغمبر اکرم (ص) کو قرآن پہنچایا۔",
    },
    {
      question: "نماز ظہر کی کتنی رکعات ہیں؟",
      options: ["2", "3", "4", "5"],
      correctAnswer: 2,
      explanation: "نماز ظہر کی 4 رکعات ہیں۔",
    },
    {
      question: "اسلامی مہینے میں حج کس مہینے میں ہوتا ہے؟",
      options: ["رجب", "ذوالحجہ", "شوال", "رمضان"],
      correctAnswer: 1,
      explanation: "حج ذوالحجہ کے مہینے میں ہوتا ہے۔",
    },
    {
      question: "آٹھویں امام کون ہیں؟",
      options: ["امام علی (ع)", "امام رضا (ع)", "امام حسین (ع)", "امام زین العابدین (ع)"],
      correctAnswer: 1,
      explanation: "آٹھویں امام امام رضا (ع) ہیں۔",
    },
    {
      question: "سورہ کوثر میں کتنی آیات ہیں؟",
      options: ["1", "2", "3", "4"],
      correctAnswer: 2,
      explanation: "سورہ کوثر میں 3 آیات ہیں۔",
    },
    {
      question: "امام زمانہ (عج) کے والد کا نام کیا تھا؟",
      options: ["امام محمد تقی (ع)", "امام علی نقی (ع)", "امام حسن عسکری (ع)", "امام جعفر صادق (ع)"],
      correctAnswer: 2,
      explanation: "امام زمانہ (عج) کے والد کا نام امام حسن عسکری (ع) تھا۔",
    },
    {
      question: "قیامت کے دن کس فرشتے کو صور پھونکنے کا حکم دیا جائے گا؟",
      options: ["حضرت جبرائیل (ع)", "حضرت میکائیل (ع)", "حضرت اسرافیل (ع)", "حضرت عزرائیل (ع)"],
      correctAnswer: 2,
      explanation: "قیامت کے دن حضرت اسرافیل (ع) کو صور پھونکنے کا حکم دیا جائے گا۔",
    },
    {
      question: "ہمارے دوسرے امام کون ہیں؟",
      options: ["امام حسین (ع)", "امام حسن (ع)", "امام محمد باقر (ع)", "امام جعفر صادق (ع)"],
      correctAnswer: 1,
      explanation: "ہمارے دوسرے امام امام حسن (ع) ہیں۔",
    },
    {
      question: "قرآن کس مہینے میں نازل ہوا؟",
      options: ["رجب", "شوال", "رمضان", "محرم"],
      correctAnswer: 2,
      explanation: "قرآن مجید رمضان کے مہینے میں نازل ہوا۔",
    },
    {
      question: "سورہ فاتحہ میں کتنی آیات ہیں؟",
      options: ["5", "6", "7", "8"],
      correctAnswer: 2,
      explanation: "سورہ فاتحہ میں 7 آیات ہیں۔",
    },
    {
      question: "حج فروع دین میں کون سے نمبر پر آتا ہے؟",
      options: ["7", "5", "3", "9"],
      correctAnswer: 2,
      explanation: "حج فروع دین میں تیسرے نمبر پر آتا ہے۔",
    },
    {
      question: "نماز مغرب کی کتنی رکعات ہیں؟",
      options: ["3", "2", "1", "4"],
      correctAnswer: 0,
      explanation: "نماز مغرب کی 3 رکعات ہیں۔",
    },
    {
      question: "چوتھے امام کون ہیں؟",
      options: ["امام حسین (ع)", "امام علی (ع)", "امام زین العابدین (ع)", "امام حسن عسکری (ع)"],
      correctAnswer: 2,
      explanation: "چوتھے امام امام زین العابدین (ع) ہیں۔",
    },
    {
      question: "فرشتے کس چیز سے بنے ہیں؟",
      options: ["مٹی", "نور", "آگ", "پانی"],
      correctAnswer: 1,
      explanation: "فرشتے نور سے بنے ہیں۔",
    },
    {
      question: "امام مہدی (عج) کب ظہور فرمائیں گے؟",
      options: ["جب اللہ چاہے گا", "2025", "2050", "2100"],
      correctAnswer: 0,
      explanation: "امام مہدی (عج) کا ظہور اللہ کی مرضی پر ہے، کوئی مقررہ تاریخ نہیں ہے۔",
    },
    {
      question: "وضو کے بغیر کون سی عبادت نہیں کی جا سکتی؟",
      options: ["روزہ", "زکات", "نماز", "حج"],
      correctAnswer: 2,
      explanation: "وضو کے بغیر نماز نہیں پڑھی جا سکتی۔",
    },
    {
      question: "قرآن کی کس سورت میں بسم اللہ الرحمن الرحیم نہیں ہے؟",
      options: ["سورہ توبہ", "سورہ یٰسین", "سورہ رحمان", "سورہ اخلاص"],
      correctAnswer: 0,
      explanation: "سورہ توبہ میں بسم اللہ الرحمن الرحیم نہیں ہے۔",
    },
  ]
  
  // DOM Elements
  const registrationContainer = document.getElementById("registration-container")
  const quizContainer = document.getElementById("quiz-container")
  const resultContainer = document.getElementById("result-container")
  const reviewContainer = document.getElementById("review-container")
  const registrationForm = document.getElementById("registration-form")
  const questionText = document.getElementById("question-text")
  const optionsContainer = document.getElementById("options-container")
  const prevBtn = document.getElementById("prev-btn")
  const nextBtn = document.getElementById("next-btn")
  const submitBtn = document.getElementById("submit-btn")
  const progressBar = document.getElementById("progress")
  const currentQuestionSpan = document.getElementById("current-question")
  const totalQuestionsSpan = document.getElementById("total-questions")
  const totalQuestionsResult = document.getElementById("total-questions-result")
  const timeSpan = document.getElementById("time")
  const userName = document.getElementById("user-name")
  const resultGuardianMName = document.getElementById("result-guardian-M-name")
  const resultGuardianFName = document.getElementById("result-guardian-F-name")
  
  const resultName = document.getElementById("result-name")
  const scorePercentage = document.getElementById("score-percentage")
  const correctAnswers = document.getElementById("correct-answers")
  const timeTaken = document.getElementById("time-taken")
  const reviewBtn = document.getElementById("review-btn")
  const restartBtn = document.getElementById("restart-btn")
  const reviewQuestionsContainer = document.getElementById("review-questions")
  const backToResultsBtn = document.getElementById("back-to-results")
  
  // Quiz state
  let currentQuestion = 0
  let userAnswers = []
  let startTime
  let timerInterval
  let userData = {}
  
  // Initialize the quiz
  function initQuiz() {
    // Set total questions count
    totalQuestionsSpan.textContent = quizQuestions.length
    totalQuestionsResult.textContent = quizQuestions.length
  
    // Initialize user answers array with null values
    userAnswers = Array(quizQuestions.length).fill(null)
  
    // Start timer
    startTime = new Date()
    startTimer()
  
    // Load first question
    loadQuestion()
  }
  
  // Start the timer
  function startTimer() {
    timerInterval = setInterval(updateTimer, 1000)
  }
  
  // Update the timer display
  function updateTimer() {
    const currentTime = new Date()
    const elapsedTime = Math.floor((currentTime - startTime) / 1000)
    const minutes = Math.floor(elapsedTime / 60)
      .toString()
      .padStart(2, "0")
    const seconds = (elapsedTime % 60).toString().padStart(2, "0")
  
    // Update timer with more emphasis
    timeSpan.textContent = `${minutes}:${seconds}`
  
    // Add visual indication when time passes certain thresholds
    if (elapsedTime > 300) {
      // After 5 minutes
      timeSpan.style.color = "#e74c3c" // Bright red
      document.getElementById("timer").style.borderColor = "#e74c3c"
    } else if (elapsedTime > 180) {
      // After 3 minutes
      timeSpan.style.color = "#e67e22" // Orange
      document.getElementById("timer").style.borderColor = "#e67e22"
    }
  }
  
  // Load a question
  function loadQuestion() {
    const question = quizQuestions[currentQuestion]
  
    // Update question text
    questionText.textContent = question.question
  
    // Clear options container
    optionsContainer.innerHTML = ""
  
    // Create option elements
    question.options.forEach((option, index) => {
      const optionElement = document.createElement("div")
      optionElement.className = "option"
      if (userAnswers[currentQuestion] === index) {
        optionElement.classList.add("selected")
      }
      optionElement.textContent = option
      optionElement.addEventListener("click", () => selectOption(index))
      optionsContainer.appendChild(optionElement)
    })
  
    // Update question counter
    currentQuestionSpan.textContent = currentQuestion + 1
  
    // Update progress bar
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100
    progressBar.style.width = `${progress}%`
  
    // Update navigation buttons
    prevBtn.disabled = currentQuestion === 0
  
    if (currentQuestion === quizQuestions.length - 1) {
      nextBtn.classList.add("hidden")
      submitBtn.classList.remove("hidden")
    } else {
      nextBtn.classList.remove("hidden")
      submitBtn.classList.add("hidden")
    }
  }
  
  // Select an option
  function selectOption(optionIndex) {
    userAnswers[currentQuestion] = optionIndex
  
    // Update UI to show selected option
    const options = optionsContainer.querySelectorAll(".option")
    options.forEach((option, index) => {
      if (index === optionIndex) {
        option.classList.add("selected")
      } else {
        option.classList.remove("selected")
      }
    })
  }
  
  // Navigate to previous question
  function goToPrevQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--
      loadQuestion()
    }
  }
  
  // Navigate to next question
  function goToNextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
      currentQuestion++
      loadQuestion()
    }
  }
  
  // Submit the quiz
  function submitQuiz() {
    // Stop the timer
    clearInterval(timerInterval)
  
    // Calculate score
    const score = calculateScore()
    const percentage = Math.round((score / quizQuestions.length) * 100)
  
    // Calculate time taken
    const endTime = new Date()
    const totalSeconds = Math.floor((endTime - startTime) / 1000)
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0")
    const seconds = (totalSeconds % 60).toString().padStart(2, "0")
  
    // Update result UI
    resultGuardianMName.textContent = `${userData.motherName}`
    resultGuardianFName.textContent = `${userData.fatherName}`
    resultName.textContent = `${userData.firstName} ${userData.lastName}`
    scorePercentage.textContent = `${percentage}%`
    correctAnswers.textContent = score
    timeTaken.textContent = `${minutes}:${seconds}`
  
    // Show result container
    quizContainer.classList.add("hidden")
    resultContainer.classList.remove("hidden")
  }
  
  // Calculate the score
  function calculateScore() {
    let score = 0
    userAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        score++
      }
    })
    return score
  }
  
  // Show review of answers
  function showReview() {
    reviewQuestionsContainer.innerHTML = ""
  
    quizQuestions.forEach((question, index) => {
      const reviewQuestion = document.createElement("div")
      reviewQuestion.className = "review-question"
  
      const questionTitle = document.createElement("h3")
      questionTitle.textContent = `Question ${index + 1}: ${question.question}`
      reviewQuestion.appendChild(questionTitle)
  
      question.options.forEach((option, optionIndex) => {
        const optionElement = document.createElement("div")
        optionElement.className = "review-option"
  
        if (userAnswers[index] === optionIndex) {
          optionElement.classList.add("user-selected")
        }
  
        if (optionIndex === question.correctAnswer) {
          optionElement.classList.add("correct-answer")
        }
  
        optionElement.textContent = option
  
        if (userAnswers[index] === optionIndex && optionIndex !== question.correctAnswer) {
          optionElement.textContent += " ❌ (Your answer)"
        } else if (optionIndex === question.correctAnswer) {
          optionElement.textContent += " ✓ (Correct answer)"
        }
  
        reviewQuestion.appendChild(optionElement)
      })
  
      const explanation = document.createElement("div")
      explanation.className = "explanation"
      explanation.textContent = `Explanation: ${question.explanation}`
      reviewQuestion.appendChild(explanation)
  
      reviewQuestionsContainer.appendChild(reviewQuestion)
    })
  
    resultContainer.classList.add("hidden")
    reviewContainer.classList.remove("hidden")
  }
  
  // Restart the quiz
  function restartQuiz() {
    // Reset quiz state
    currentQuestion = 0
    userAnswers = Array(quizQuestions.length).fill(null)
  
    // Reset UI
    resultContainer.classList.add("hidden")
    registrationContainer.classList.remove("hidden")
  
    // Reset form
    registrationForm.reset()
  }
  
  // Event listeners
  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault()
  
    // Collect user data
    userData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      motherName: document.getElementById("motherName").value,
      fatherName: document.getElementById("fatherName").value,
      gender: document.querySelector('input[name="gender"]:checked').value,
      age: document.getElementById("age").value,
      country: document.getElementById("country").value,
    }
  
    // Display user name in quiz
    userName.textContent = `${userData.firstName} ${userData.lastName}`
  
    // Hide registration and show quiz
    registrationContainer.classList.add("hidden")
    quizContainer.classList.remove("hidden")
  
    // Initialize quiz
    initQuiz()
  })
  
  prevBtn.addEventListener("click", goToPrevQuestion)
  nextBtn.addEventListener("click", goToNextQuestion)
  submitBtn.addEventListener("click", submitQuiz)
  reviewBtn.addEventListener("click", showReview)
  restartBtn.addEventListener("click", restartQuiz)
  backToResultsBtn.addEventListener("click", () => {
    reviewContainer.classList.add("hidden")
    resultContainer.classList.remove("hidden")
  })
  
  