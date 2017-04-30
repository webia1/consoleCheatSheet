function resizeArticle(size) {
	const allArticles = document.getElementsByTagName('article');
    for (let i = 0; i < allArticles.length; i++) {
        allArticles[i].style.fontSize = `${size}px`;
    }
    msnry.layout();
}

function tableMethod() {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    var family = {};
    family.mother = new Person("Susan", "Doyle", 32);
    family.father = new Person("John", "Doyle", 33);
    family.daughter = new Person("Lily", "Doyle", 5);
    family.son = new Person("Mike", "Doyle", 8);

    console.table(family, ["firstName", "age"]);
}

function testCount() {
    function login(name) {
      console.count(name + ' logged in');
    }

    login("Bob");
    login("Mike");
    login("Bob");
    login("Bob");
}


function testTime() {
    console.time();
    var arr = new Array(10000);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Object();
    }
    console.timeEnd();
}

function testTimeMultiple() {
    console.time("total");
    console.time("init arr");
    var arr = new Array(10000);
    console.timeEnd("init arr");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Object();
    }
    console.timeEnd("total");
}

const msnry = new Masonry( '.grid', { "itemSelector": ".grid-item" });
