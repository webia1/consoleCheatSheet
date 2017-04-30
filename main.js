function resizeArticle(size) {
	const allArticles = document.getElementsByTagName('article');
    for (let i = 0; i < allArticles.length; i++) {
        allArticles[i].style.fontSize = `${size}px`;
    }
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
