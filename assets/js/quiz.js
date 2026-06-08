// ============================================
// 测验逻辑 - 核心判分和交互
// ============================================

// 全局变量
let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];
let answeredQuestions = [];

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
    loadQuestion();
});

/**
 * 初始化测验
 */
function initializeQuiz() {
    // 初始化答题记录数��
    selectedAnswers = new Array(QUESTIONS.length).fill(null);
    answeredQuestions = new Array(QUESTIONS.length).fill(false);
    currentQuestion = 0;
    score = 0;
}

/**
 * 加载当前题目
 */
function loadQuestion() {
    // 隐藏结果和完成卡片
    document.getElementById('questionCard').style.display = 'block';
    document.getElementById('resultCard').style.display = 'none';
    document.getElementById('completionCard').style.display = 'none';

    const question = QUESTIONS[currentQuestion];
    
    // 更新进度
    updateProgress();
    
    // 更新题目信息
    document.getElementById('questionTitle').textContent = question.title;
    document.getElementById('questionDescription').textContent = question.description;
    document.getElementById('difficulty').textContent = getDifficultyText(question.difficulty);
    document.getElementById('difficulty').className = `difficulty ${question.difficulty}`;
    document.getElementById('category').textContent = question.category;
    
    // 生成选项
    renderOptions(question);
    
    // 恢复之前的选择
    if (selectedAnswers[currentQuestion] !== null) {
        const selectedOption = document.querySelector(`input[value="${selectedAnswers[currentQuestion]}"]`);
        if (selectedOption) {
            selectedOption.checked = true;
            selectedOption.closest('.option').classList.add('selected');
        }
    }
    
    // 更新按钮状态
    updateButtonStates();
}

/**
 * 获取难度文本
 */
function getDifficultyText(difficulty) {
    const difficultyMap = {
        'easy': '🟢 简单',
        'medium': '🟡 中等',
        'hard': '🔴 困难'
    };
    return difficultyMap[difficulty] || '简单';
}

/**
 * 更新进度条
 */
function updateProgress() {
    const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = 
        `第 ${currentQuestion + 1} 题 / 共 ${QUESTIONS.length} 题`;
}

/**
 * 生成选项 HTML
 */
function renderOptions(question) {
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input type="radio" id="option${index}" name="answer" value="${index}">
            <label for="option${index}">${String.fromCharCode(65 + index)}. ${option}</label>
        `;
        
        optionDiv.addEventListener('click', function() {
            // 移除其他选项的选中状态
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            // 添加当前选项的选中状态
            this.classList.add('selected');
            // 保存选择
            const radioInput = this.querySelector('input[type="radio"]');
            selectedAnswers[currentQuestion] = parseInt(radioInput.value);
        });
        
        optionsContainer.appendChild(optionDiv);
    });
}

/**
 * 更新按钮状态
 */
function updateButtonStates() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // 上一题按钮
    prevBtn.disabled = currentQuestion === 0;
    prevBtn.style.opacity = currentQuestion === 0 ? '0.5' : '1';
    
    // 下一题按钮
    nextBtn.disabled = currentQuestion === QUESTIONS.length - 1;
    nextBtn.style.opacity = currentQuestion === QUESTIONS.length - 1 ? '0.5' : '1';
    
    // 提交按钮
    if (answeredQuestions[currentQuestion]) {
        submitBtn.textContent = '已提交 ✓';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';
    } else {
        submitBtn.textContent = '提交答案';
        submitBtn.disabled = selectedAnswers[currentQuestion] === null;
        submitBtn.style.opacity = selectedAnswers[currentQuestion] === null ? '0.5' : '1';
    }
}

/**
 * 上一题
 */
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

/**
 * 下一题
 */
function nextQuestion() {
    if (currentQuestion < QUESTIONS.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

/**
 * 提交答案
 */
function submitAnswer() {
    if (selectedAnswers[currentQuestion] === null) {
        alert('请先选择一个答案');
        return;
    }
    
    // 标记已答题
    answeredQuestions[currentQuestion] = true;
    
    const question = QUESTIONS[currentQuestion];
    const userAnswer = selectedAnswers[currentQuestion];
    const isCorrect = userAnswer === question.correctAnswer;
    
    // 计算分数
    if (isCorrect) {
        score += 10; // 每题 10 分
    }
    
    // 显示结果
    showResult(question, userAnswer, isCorrect);
    
    // 禁用选项
    document.querySelectorAll('.option').forEach((option, index) => {
        option.classList.add('disabled');
        
        if (index === question.correctAnswer) {
            option.classList.add('correct');
        }
        if (index === userAnswer && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
}

/**
 * 显示结果
 */
function showResult(question, userAnswer, isCorrect) {
    const questionCard = document.getElementById('questionCard');
    const resultCard = document.getElementById('resultCard');
    const resultHeader = document.getElementById('resultHeader');
    
    questionCard.style.display = 'none';
    resultCard.style.display = 'block';
    
    // 更新结果卡片样式
    if (isCorrect) {
        resultCard.classList.remove('incorrect');
        resultHeader.innerHTML = '<h2>✅ 回答正确！</h2>';
        document.getElementById('resultMessage').textContent = '恭喜你，你选择的答案是正确的！';
    } else {
        resultCard.classList.add('incorrect');
        resultHeader.innerHTML = '<h2>❌ 回答错误</h2>';
        const correctOption = question.options[question.correctAnswer];
        document.getElementById('resultMessage').textContent = `很遗憾，答案错误。正确答案是：${String.fromCharCode(65 + question.correctAnswer)}. ${correctOption}`;
    }
    
    // 显示解析
    document.getElementById('explanationText').textContent = question.explanation;
    
    // 更新按钮
    updateButtonStates();
}

/**
 * 继续下一题
 */
function continueToNext() {
    // 检查是否是最后一题
    if (currentQuestion === QUESTIONS.length - 1) {
        showCompletion();
    } else {
        currentQuestion++;
        loadQuestion();
    }
}

/**
 * 显示完成页面
 */
function showCompletion() {
    document.getElementById('questionCard').style.display = 'none';
    document.getElementById('resultCard').style.display = 'none';
    document.getElementById('completionCard').style.display = 'block';
    
    // 计算统计数据
    const correctCount = answeredQuestions.reduce((count, answered, index) => {
        return answered && selectedAnswers[index] === QUESTIONS[index].correctAnswer ? count + 1 : count;
    }, 0);
    const totalCount = QUESTIONS.length;
    const correctRate = Math.round((correctCount / totalCount) * 100);
    
    // 更新完成卡片内容
    document.getElementById('finalScore').textContent = score;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('totalCount').textContent = totalCount;
    document.getElementById('correctRate').textContent = correctRate + '%';
    
    // 显示完成消息
    const message = getCompletionMessage(correctRate);
    document.getElementById('completionMessage').textContent = message;
    
    // 保存统计数据到 localStorage
    const stats = JSON.parse(localStorage.getItem('quizStats') || '{"completed": 0, "totalScore": 0}');
    stats.completed = (stats.completed || 0) + 1;
    stats.totalScore = (stats.totalScore || 0) + score;
    localStorage.setItem('quizStats', JSON.stringify(stats));
}

/**
 * 获取完成消息
 */
function getCompletionMessage(correctRate) {
    if (correctRate === 100) {
        return '🌟 完美！你掌握了所有知识点！';
    } else if (correctRate >= 80) {
        return '🎉 非常好！继续保持！';
    } else if (correctRate >= 60) {
        return '👍 不错！再复习一下，下次会更好！';
    } else if (correctRate >= 40) {
        return '📚 需要加强学习。建议复习相关知识点！';
    } else {
        return '💪 别灰心，再试一次吧！';
    }
}

/**
 * 重新开始测验
 */
function restartQuiz() {
    initializeQuiz();
    loadQuestion();
}

/**
 * 监听选项变化
 */
document.addEventListener('change', function(e) {
    if (e.target.name === 'answer') {
        updateButtonStates();
    }
});
