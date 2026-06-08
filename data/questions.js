// Python 知识测验题库
const QUESTIONS = [
    {
        id: 1,
        title: "Python 中哪个关键字用于定义函数？",
        description: "选择用于在 Python 中定义函数的关键字",
        options: [
            "def",
            "func",
            "function",
            "define"
        ],
        correctAnswer: 0,
        explanation: "在 Python 中，使用 'def' 关键字来定义函数。例如：def my_function(): ...",
        difficulty: "easy",
        category: "基础语法"
    },
    {
        id: 2,
        title: "下列哪个是 Python 中的可变数据类型？",
        description: "识别 Python 中可变的数据类型",
        options: [
            "元组 (Tuple)",
            "字符串 (String)",
            "列表 (List)",
            "数字 (Number)"
        ],
        correctAnswer: 2,
        explanation: "列表（List）是可变的，这意味着你可以修改、添加或删除其中的元素。而元组、字符串和数字是不可变的。",
        difficulty: "easy",
        category: "数据类型"
    },
    {
        id: 3,
        title: "Python 字典的键必须是什么类型？",
        description: "选择 Python 字典中键必须满足的条件",
        options: [
            "必须是字符串",
            "必须是可哈希的不可变类型",
            "必须是整数",
            "可以是任意类型"
        ],
        correctAnswer: 1,
        explanation: "Python 字典的键必须是可哈希的（hashable），即不可变的数据类型，如字符串、数字或元组。这样才能快速查找值。",
        difficulty: "medium",
        category: "数据结构"
    },
    {
        id: 4,
        title: "以下代码的输出是什么？\nprint(len([1, 2, 3]))",
        description: "计算列表的长度",
        options: [
            "1",
            "2",
            "3",
            "错误"
        ],
        correctAnswer: 2,
        explanation: "len() 函数返回序列的长度。列表 [1, 2, 3] 包含 3 个元素，所以输出是 3。",
        difficulty: "easy",
        category: "内置函数"
    },
    {
        id: 5,
        title: "Python 中如何创建一个空集合？",
        description: "选择正确的创建空集合的方式",
        options: [
            "set = {}",
            "set = set()",
            "set = []",
            "set = ()"
        ],
        correctAnswer: 1,
        explanation: "使用 set() 来创建空集合。注意 {} 创建的是空字典，不是空集合。",
        difficulty: "medium",
        category: "数据结构"
    },
    {
        id: 6,
        title: "下列哪个是 Python 中的条件语句？",
        description: "选择 Python 中用于条件判断的正确语法",
        options: [
            "if...then...else",
            "if...elif...else",
            "when...then...else",
            "case...of"
        ],
        correctAnswer: 1,
        explanation: "Python 使用 if...elif...else 进行条件判断。'elif' 是 'else if' 的简写。",
        difficulty: "easy",
        category: "控制流"
    },
    {
        id: 7,
        title: "Python 中的 'try...except' 语句用于什么？",
        description: "选择 try-except 的主要用途",
        options: [
            "定义函数",
            "处理异常/错误",
            "创建循环",
            "声明变量"
        ],
        correctAnswer: 1,
        explanation: "'try...except' 用于异常处理。代码在 try 块中执行，如果发生错误，except 块会捕获并处理该错误。",
        difficulty: "medium",
        category: "错误处理"
    },
    {
        id: 8,
        title: "以下代码会输出什么？\nprint(3 ** 2)",
        description: "计算指数运算的结果",
        options: [
            "6",
            "9",
            "5",
            "1"
        ],
        correctAnswer: 1,
        explanation: "'**' 是幂运算符。3 ** 2 表示 3 的 2 次方，等于 9。",
        difficulty: "easy",
        category: "运算符"
    },
    {
        id: 9,
        title: "Python 中哪个函数用于获取用户输入？",
        description: "选择用于读取用户输入的函数",
        options: [
            "get_input()",
            "input()",
            "scan()",
            "read()"
        ],
        correctAnswer: 1,
        explanation: "input() 函数用于从用户获取输入。它以字符串的形式返回用户的输入。",
        difficulty: "easy",
        category: "内置函数"
    },
    {
        id: 10,
        title: "列表推导式 [x**2 for x in range(3)] 的结果是什么？",
        description: "理解列表推导式的工作原理",
        options: [
            "[0, 2, 4]",
            "[0, 1, 4]",
            "[1, 2, 3]",
            "[0, 1, 2]"
        ],
        correctAnswer: 1,
        explanation: "这个列表推导式创建了一个列表，包含 range(3) (即 0, 1, 2) 中每个数字的平方。结果是 [0, 1, 4]。",
        difficulty: "medium",
        category: "列表操作"
    },
    {
        id: 11,
        title: "Python 中的 'self' 参数在类方法中代表什么？",
        description: "理解 self 在面向对象编程中的意义",
        options: [
            "全局变量",
            "当前类的实例",
            "全局函数",
            "模块名称"
        ],
        correctAnswer: 1,
        explanation: "'self' 代表类的当前实例。它允许你访问和修改实例的属性和方法。",
        difficulty: "medium",
        category: "面向对象"
    },
    {
        id: 12,
        title: "以下哪个不是 Python 的数据类型？",
        description: "识别 Python 的标准数据类型",
        options: [
            "list",
            "boolean",
            "string",
            "binary"
        ],
        correctAnswer: 3,
        explanation: "'binary' 不是 Python 的基本数据类型。Python 的基本数据类型包括：int, float, str, bool, list, dict, tuple, set 等。",
        difficulty: "medium",
        category: "数据类型"
    },
    {
        id: 13,
        title: "字符串的 split() 方法做什么？",
        description: "理解字符串分割操作",
        options: [
            "连接字符串",
            "将字符串分割成子字符串列表",
            "替换字符串中的字符",
            "改变字符串的大小写"
        ],
        correctAnswer: 1,
        explanation: "split() 方法将字符串分割成一个子字符串的列表。默认情况下，它按空格分割。例如：'hello world'.split() 返回 ['hello', 'world']",
        difficulty: "easy",
        category: "字符串方法"
    },
    {
        id: 14,
        title: "Python 中的 'import' 语句用于什么？",
        description: "选择 import 语句的正确用途",
        options: [
            "导入模块或库",
            "创建新变量",
            "删除变量",
            "打印输出"
        ],
        correctAnswer: 0,
        explanation: "'import' 语句用于导入 Python 模块或库，使你能够使用该模块中定义的函数和变量。",
        difficulty: "easy",
        category: "模块"
    },
    {
        id: 15,
        title: "以下代码的输出是什么？\nx = [1, 2, 3]\nx.append(4)\nprint(x)",
        description: "理解列表的 append 方法",
        options: [
            "[1, 2, 3]",
            "[1, 2, 3, 4]",
            "[4, 1, 2, 3]",
            "错误"
        ],
        correctAnswer: 1,
        explanation: "append() 方法将一个元素添加到列表的末尾。所以 [1, 2, 3] 添加 4 后变成 [1, 2, 3, 4]。",
        difficulty: "easy",
        category: "列表方法"
    },
    {
        id: 16,
        title: "Python 中什么是生成器？",
        description: "选择对生成器的正确定义",
        options: [
            "一种创建类的方式",
            "一种迭代对象，使用 yield 关键字",
            "一种数据库连接",
            "一种加密方法"
        ],
        correctAnswer: 1,
        explanation: "生成器是一个使用 yield 关键字的函数。它返回一个迭��器对象，可以逐个地生成值，而不是一次性将所有值加载到内存中。",
        difficulty: "hard",
        category: "高级特性"
    },
    {
        id: 17,
        title: "下列关于 Python 的哪个说法是正确的？",
        description: "选择关于 Python 的正确特性描述",
        options: [
            "Python 是强类型语言",
            "Python 是解释型语言",
            "Python 需要编译后才能运行",
            "Python 不支持面向对象编程"
        ],
        correctAnswer: 1,
        explanation: "Python 是解释型语言，这意味着代码由解释器逐行执行，不需要编译。它也是动态类型语言，支持面向对象编程。",
        difficulty: "medium",
        category: "基础概念"
    },
    {
        id: 18,
        title: "Python 中的 enumerate() 函数返回什么？",
        description: "理解 enumerate 函数的返回值",
        options: [
            "列表中的元素个数",
            "元素和索引的对偶",
            "按字母顺序排序的元素",
            "列表的副本"
        ],
        correctAnswer: 1,
        explanation: "enumerate() 函数返回一个迭代器，产生 (index, element) 的对偶。它用于在循环中同时获取元素的索引和值。",
        difficulty: "medium",
        category: "内置函数"
    },
    {
        id: 19,
        title: "Python 中如何创建一个包含 5 个零的列表？",
        description: "使用列表乘法操作",
        options: [
            "[0] * 5",
            "list(0) * 5",
            "[0 for i in range(5)]",
            "[0] + [0] + [0] + [0] + [0]"
        ],
        correctAnswer: 0,
        explanation: "[0] * 5 是创建重复列表的快速方法。它创建了一个包含 5 个零的列表：[0, 0, 0, 0, 0]。选项 2 也是正确的，但不如选项 1 简洁。",
        difficulty: "easy",
        category: "列表操作"
    },
    {
        id: 20,
        title: "以下代码会输出什么？\nprint('Hello' + ' ' + 'World')",
        description: "字符串连接操作",
        options: [
            "Hello World",
            "'Hello World'",
            "Hello + World",
            "错误"
        ],
        correctAnswer: 0,
        explanation: "'+'  运算符用于连接字符串。'Hello' + ' ' + 'World' 会产生 'Hello World'，然后被打印出来。",
        difficulty: "easy",
        category: "字符串操作"
    }
];
