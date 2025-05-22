document.addEventListener("DOMContentLoaded", function () {
  // OOP Interview Questions Data
  const questions = [
   
  {
    "id": 1,
    "category": "basic",
    "question": "What is Object-Oriented Programming (OOP)?",
    "code": null,
    "answer": "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects', which can contain data and code: data in the form of fields (attributes or properties), and code in the form of procedures (methods). OOP focuses on the objects that developers want to manipulate rather than the logic required to manipulate them. This approach to programming is well-suited for programs that are large, complex, and actively updated or maintained."
  },
  {
    "id": 2,
    "category": "basic",
    "question": "What are the basic concepts of OOP?",
    "code": null,
    "answer": "The basic concepts of OOP are: 1. Abstraction, 2. Encapsulation, 3. Inheritance, 4. Polymorphism."
  },
  {
    "id": 3,
    "category": "basic",
    "question": "What is a class?",
    "code": null,
    "answer": "A class is a blueprint or template that describes the details of an object. It defines the properties (attributes) and behaviors (methods) that the objects created from the class will have."
  },
  {
    "id": 4,
    "category": "basic",
    "question": "What is an object?",
    "code": null,
    "answer": "An object is an instance of a class. It has its own state (data), behavior (methods), and identity."
  },
  {
    "id": 5,
    "category": "basic",
    "question": "What is Encapsulation?",
    "code": null,
    "answer": "Encapsulation is an attribute of an object that contains all hidden data, which can be restricted to the members of that class. Access levels include Public, Protected, Private, Internal, and Protected Internal."
  },
  {
    "id": 6,
    "category": "basic",
    "question": "What is Polymorphism?",
    "code": null,
    "answer": "Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables one interface to be used for a general class of actions, with the specific action determined by the exact nature of the situation."
  },
  {
    "id": 7,
    "category": "basic",
    "question": "What is Inheritance?",
    "code": null,
    "answer": "Inheritance is a mechanism where one class (subclass) inherits the properties and behaviors of another class (superclass). It promotes code reusability and hierarchical classification."
  },
  {
    "id": 8,
    "category": "basic",
    "question": "What are manipulators?",
    "code": null,
    "answer": "Manipulators are functions used with insertion (<<) and extraction (>>) operators to format output or input. Examples include 'endl' for line breaks and 'setw' for setting field width."
  },
  {
    "id": 9,
    "category": "basic",
    "question": "What is a constructor?",
    "code": null,
    "answer": "A constructor is a special method used to initialize the state of an object. It is invoked automatically when an object is created. Rules: 1. Constructor name must match the class name. 2. It must have no return type."
  },
  {
    "id": 10,
    "category": "basic",
    "question": "What is a destructor?",
    "code": null,
    "answer": "A destructor is a method automatically called when an object goes out of scope or is destroyed. It is used to release resources. The destructor name is the same as the class name, prefixed with a tilde (~)."
  },
  {
    "id": 11,
    "category": "intermediate",
    "question": "What is an inline function?",
    "code": null,
    "answer": "An inline function is a function where the compiler inserts the complete body of the function wherever it is called in the code, to reduce the overhead of function calls."
  },
  {
    "id": 12,
    "category": "intermediate",
    "question": "What is a virtual function?",
    "code": null,
    "answer": "A virtual function is a member function declared in a base class and overridden in derived classes. It enables runtime polymorphism. In C++, it is declared using the 'virtual' keyword."
  },
  {
    "id": 13,
    "category": "intermediate",
    "question": "What is a friend function?",
    "code": null,
    "answer": "A friend function is a function that is not a member of a class but has access to its private and protected members. It is declared using the 'friend' keyword inside the class."
  },
  {
    "id": 14,
    "category": "intermediate",
    "question": "What is function overloading?",
    "code": "void add(int a, int b);\nvoid add(double a, double b);",
    "answer": "Function overloading allows multiple functions with the same name but different parameters (type, number, or order) to coexist in the same scope. The correct function is called based on the arguments provided."
  },
  {
    "id": 15,
    "category": "intermediate",
    "question": "What is operator overloading?",
    "code": null,
    "answer": "Operator overloading allows operators (e.g., +, -, *) to be redefined for user-defined types (classes). It enables objects to be manipulated using standard operator syntax."
  },
  {
    "id": 16,
    "category": "intermediate",
    "question": "What is an abstract class?",
    "code": null,
    "answer": "An abstract class is a class that cannot be instantiated and is meant to be inherited by other classes. It may contain abstract methods (without implementation) and/or concrete methods."
  },
  {
    "id": 17,
    "category": "basic",
    "question": "What is a ternary operator?",
    "code": "condition ? expr1 : expr2",
    "answer": "The ternary operator is a conditional operator that takes three arguments: a condition, an expression to execute if the condition is true, and another expression if the condition is false."
  },
  {
    "id": 18,
    "category": "intermediate",
    "question": "What is the use of the finalize method?",
    "code": null,
    "answer": "The finalize method is used to perform cleanup operations on resources before an object is garbage collected. It is called by the garbage collector when it determines no more references to the object exist."
  },
  {
    "id": 19,
    "category": "basic",
    "question": "What are the different types of arguments?",
    "code": null,
    "answer": "1. Call by Value: The actual value is passed. Changes made inside the function do not affect the original value. 2. Call by Reference: The address of the value is passed. Changes made inside the function affect the original value."
  },
  {
    "id": 20,
    "category": "intermediate",
    "question": "What is the super keyword?",
    "code": null,
    "answer": "The 'super' keyword is used to refer to the immediate parent class object. It is used to call the parent class's methods or constructors and to access hidden members of the superclass."
  },
  {
    "id": 21,
    "category": "intermediate",
    "question": "What is method overriding?",
    "code": null,
    "answer": "Method overriding occurs when a subclass provides a specific implementation for a method already defined in its superclass. The method must have the same name, parameters, and return type."
  },
  {
    "id": 22,
    "category": "intermediate",
    "question": "What is an interface?",
    "code": null,
    "answer": "An interface is a collection of abstract methods. A class that implements an interface must provide implementations for all its methods. Interfaces are used to achieve multiple inheritances and abstraction."
  },
  {
    "id": 23,
    "category": "intermediate",
    "question": "What is exception handling?",
    "code": "try { ... } catch (Exception e) { ... }",
    "answer": "Exception handling is a mechanism to handle runtime errors gracefully. It uses 'try', 'catch', and 'throw' keywords to manage exceptions and ensure the program can recover or fail safely."
  },
  {
    "id": 24,
    "category": "basic",
    "question": "What are tokens?",
    "code": null,
    "answer": "Tokens are the smallest individual units in a program, recognized by the compiler. Examples include keywords, identifiers, constants, operators, and punctuation marks like brackets and commas."
  },
  {
    "id": 25,
    "category": "intermediate",
    "question": "What is the difference between overloading and overriding?",
    "code": null,
    "answer": "Overloading involves defining multiple methods with the same name but different parameters in the same class (static binding). Overriding involves redefining a method in a subclass with the same signature as in the superclass (dynamic binding)."
  },
  {
    "id": 26,
    "category": "basic",
    "question": "What is the difference between a class and an object?",
    "code": null,
    "answer": "A class is a blueprint or template that defines the structure and behavior of objects. An object is an instance of a class, with its own state and behavior. Classes are abstract, while objects are concrete."
  },
  {
    "id": 27,
    "category": "basic",
    "question": "What is abstraction?",
    "code": null,
    "answer": "Abstraction is the concept of hiding complex implementation details and showing only the essential features of an object. It simplifies interaction with objects by exposing only relevant operations."
  },
  {
    "id": 28,
    "category": "basic",
    "question": "What are access modifiers?",
    "code": null,
    "answer": "Access modifiers define the visibility and accessibility of classes, methods, and variables. Types include: Private (accessible only within the class), Protected (accessible within the class and subclasses), Public (accessible anywhere), and others like Internal and Protected Internal."
  },
  {
    "id": 29,
    "category": "intermediate",
    "question": "What are sealed modifiers?",
    "code": null,
    "answer": "Sealed modifiers prevent a class from being inherited or a method from being overridden in derived classes. They are used to restrict further extension or modification."
  },
  {
    "id": 30,
    "category": "intermediate",
    "question": "How can we call the base method without creating an instance?",
    "code": null,
    "answer": "By declaring the method as 'static' in the base class. Static methods belong to the class rather than instances and can be called using the class name."
  },
  {
    "id": 31,
    "category": "intermediate",
    "question": "What is the difference between new and override?",
    "code": null,
    "answer": "The 'new' modifier hides a method from the base class, while 'override' extends or modifies the implementation of a virtual method from the base class in the derived class."
  },
  {
    "id": 32,
    "category": "basic",
    "question": "What are the various types of constructors?",
    "code": null,
    "answer": "1. Default Constructor: No parameters. 2. Parametric Constructor: Takes parameters to initialize objects. 3. Copy Constructor: Creates a new object as a copy of an existing object."
  },
  {
    "id": 33,
    "category": "intermediate",
    "question": "What is early and late binding?",
    "code": null,
    "answer": "Early binding (static binding) occurs at compile time, where the method to be called is determined. Late binding (dynamic binding) occurs at runtime, typically using virtual functions or interfaces."
  },
  {
    "id": 34,
    "category": "intermediate",
    "question": "What is 'this' pointer?",
    "code": null,
    "answer": "The 'this' pointer refers to the current instance of the class. It is used to differentiate between class members and parameters with the same name, and to pass the current object as a parameter."
  },
  {
    "id": 35,
    "category": "basic",
    "question": "What is the difference between structure and a class?",
    "code": null,
    "answer": "In C++, the default access modifier for a structure is public, while for a class it is private. Structures are typically used for data grouping, whereas classes encapsulate data and behavior with stricter validation."
  },
  {
    "id": 36,
    "category": "basic",
    "question": "What is the default access modifier in a class?",
    "code": null,
    "answer": "The default access modifier for a class member is 'private'. For the class itself, it depends on the language (e.g., 'internal' in C#)."
  },
  {
    "id": 37,
    "category": "intermediate",
    "question": "What is a pure virtual function?",
    "code": "virtual void function() = 0;",
    "answer": "A pure virtual function is a virtual function with no implementation in the base class, making the class abstract. Derived classes must override this function to instantiate objects."
  },
  {
    "id": 38,
    "category": "basic",
    "question": "Can a static method use non-static members?",
    "code": null,
    "answer": "No, a static method cannot directly access non-static members (instance variables or methods) because static methods belong to the class, not instances. They can only access static members."
  },
  {
    "id": 39,
    "category": "basic",
    "question": "What are base class, subclass, and superclass?",
    "code": null,
    "answer": "A base class (or superclass) is a parent class that is inherited by a subclass (or derived class). The subclass inherits properties and behaviors from the base class and can extend or modify them."
  },
  {
    "id": 40,
    "category": "intermediate",
    "question": "What is static and dynamic binding?",
    "code": null,
    "answer": "Static binding resolves method calls at compile time (e.g., method overloading). Dynamic binding resolves method calls at runtime (e.g., method overriding using virtual functions)."
  },
  {
    "id": 41,
    "category": "basic",
    "question": "How many instances can be created for an abstract class?",
    "code": null,
    "answer": "Zero. An abstract class cannot be instantiated directly. It must be inherited by a concrete (non-abstract) subclass, which can then be instantiated."
  },
  {
    "id": 42,
    "category": "intermediate",
    "question": "Which keyword is used for operator overloading?",
    "code": null,
    "answer": "The 'operator' keyword is used to overload operators in languages like C++. For example, 'operator+' overloads the '+' operator."
  },
  {
    "id": 43,
    "category": "basic",
    "question": "What is the default access specifier in a class definition?",
    "code": null,
    "answer": "The default access specifier for class members is 'private' in languages like C++ and Java."
  },
  {
    "id": 44,
    "category": "basic",
    "question": "Which OOP concept is used as a reuse mechanism?",
    "code": null,
    "answer": "Inheritance is the OOP concept used for code reuse, allowing a subclass to inherit properties and methods from a superclass."
  },
  
    {
    "id": 45,
    "category": "basic",
    "question": "What is static and dynamic Binding?",
    "code": null,
    "answer": "Static Binding (Early Binding) resolves method calls at compile time (e.g., method overloading or non-virtual functions). Dynamic Binding (Late Binding) resolves method calls at runtime (e.g., method overriding using virtual functions or interfaces)."
  },
  {
    "id": 46,
    "category": "basic",
    "question": "How many instances can be created for an abstract class?",
    "code": null,
    "answer": "Zero. An abstract class cannot be instantiated directly. It must be inherited by a concrete subclass, which can then be instantiated."
  },
  {
    "id": 47,
    "category": "intermediate",
    "question": "Which keyword can be used for overloading?",
    "code": "operator+",
    "answer": "The 'operator' keyword is used for operator overloading (e.g., overloading '+' with 'operator+'). For method overloading, no keyword is needed—just define multiple methods with the same name but different parameters."
  },
  {
    "id": 48,
    "category": "basic",
    "question": "What is the default access specifier in a class definition?",
    "code": null,
    "answer": "The default access specifier for class members is 'private' in C++ and Java. In C#, it's 'private' for members and 'internal' for the class itself."
  },
  {
    "id": 49,
    "category": "basic",
    "question": "Which OOPS concept is used as a reuse mechanism?",
    "code": null,
    "answer": "Inheritance is the OOP concept used for code reuse, allowing a subclass to inherit properties and methods from a superclass."
  },
  {
    "id": 50,
    "category": "basic",
    "question": "Which OOPS concept exposes only the necessary information to the calling functions?",
    "code": null,
    "answer": "Encapsulation hides internal implementation details and exposes only what is necessary through public methods, while keeping data private or protected."
  }

]
  // DOM Elements
  const questionCard = document.getElementById("question-card");
  const questionList = document.getElementById("question-list");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const showAnswerBtn = document.getElementById("show-answer-btn");
  const progressBar = document.getElementById("progress-bar");
  const currentQuestionSpan = document.getElementById("current-question");
  const totalQuestionsSpan = document.getElementById("total-questions");
  const themeSwitch = document.getElementById("theme-switch");
  const filterCheckboxes = document.querySelectorAll(".filter-options input");

  // State
  let currentQuestionIndex = 0;
  let filteredQuestions = [...questions];

  // Initialize
  totalQuestionsSpan.textContent = questions.length;
  updateQuestionList();
  displayQuestion(currentQuestionIndex);

  // Event Listeners
  prevBtn.addEventListener("click", showPreviousQuestion);
  nextBtn.addEventListener("click", showNextQuestion);
  showAnswerBtn.addEventListener("click", toggleAnswer);

  themeSwitch.addEventListener("change", function () {
    document.documentElement.setAttribute(
      "data-theme",
      this.checked ? "dark" : "light"
    );
  });

  filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterQuestions);
  });

  // Functions
  function displayQuestion(index) {
    const question = filteredQuestions[index];

    if (!question) {
      questionCard.innerHTML = `<div class="no-questions">No questions match your filter criteria.</div>`;
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      showAnswerBtn.disabled = true;
      return;
    }

    let html = `
            <div class="question-number">Question ${question.id}</div>
            <h2 class="question-title">${question.question}</h2>
        `;

    if (question.code) {
      html += `
                <div class="code-block">
                    <code>${formatCode(question.code)}</code>
                </div>
            `;
    }

    html += `
            <div class="answer-container" id="answer-container">
                <h3>Answer:</h3>
                <div class="answer-content">${question.answer}</div>
            </div>
        `;

    questionCard.innerHTML = html;

    // Update UI state
    currentQuestionSpan.textContent = index + 1;
    progressBar.style.width = `${((index + 1) / filteredQuestions.length) * 100}%`;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === filteredQuestions.length - 1;

    // Update active question in list
    const questionItems = document.querySelectorAll(".question-item");
    questionItems.forEach((item) => item.classList.remove("active"));

    const activeItem = document.querySelector(
      `.question-item[data-id="${question.id}"]`
    );
    if (activeItem) {
      activeItem.classList.add("active");
      // Scroll to active item
      activeItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function formatCode(code) {
    // Simple code syntax highlighting
    return code
      .replace(
        /\b(class|interface|extends|implements|public|private|protected|static|final|abstract|void|int|String|boolean|return|new|this|super)\b/g,
        (match) => `<span class="keyword">${match}</span>`
      )
      .replace(/\n/g, "<br>");
  }

  function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      displayQuestion(currentQuestionIndex);
    }
  }

  function showNextQuestion() {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      currentQuestionIndex++;
      displayQuestion(currentQuestionIndex);
    }
  }

  function toggleAnswer() {
    const answerContainer = document.getElementById("answer-container");
    if (answerContainer) {
      answerContainer.classList.toggle("visible");

      if (answerContainer.classList.contains("visible")) {
        showAnswerBtn.innerHTML = 
      
        '<i class="fas fa-eye-slash"></i> Hide Answer';
      } else {
        showAnswerBtn.innerHTML = '<span class="eye-icon">👁️</span> Show Answer';
      }
    }
  }

  function updateQuestionList() {
    questionList.innerHTML = "";

    filteredQuestions.forEach((question, index) => {
      const listItem = document.createElement("div");
      listItem.className = "question-item";
      listItem.dataset.id = question.id;
      listItem.textContent = `Q${question.id}: ${question.question.substring(
        0,
        30
      )}${question.question.length > 30 ? "..." : ""}`;

      if (index === currentQuestionIndex) {
        listItem.classList.add("active");
      }

      listItem.addEventListener("click", () => {
        currentQuestionIndex = index;
        displayQuestion(currentQuestionIndex);
      });

      questionList.appendChild(listItem);
    });
  }

  function filterQuestions() {
    const selectedCategories = Array.from(filterCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    if (selectedCategories.length === 0) {
      filteredQuestions = [...questions];
    } else {
      filteredQuestions = questions.filter((question) =>
        selectedCategories.includes(question.category)
      );
    }

    // Reset to first question if current is out of bounds
    currentQuestionIndex = 0;

    updateQuestionList();
    displayQuestion(currentQuestionIndex);
    totalQuestionsSpan.textContent = filteredQuestions.length;
  }
});
