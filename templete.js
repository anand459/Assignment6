var person1 = {
    FirstName: "Sundar",
    LastName: "Pichai",
    Office_Address: "Santa Clara County, California, United States"
}

var person2 = new Object();
person2.FirstName = "Jeff";
person2.LastName = "Bezos";
person2.Office_Address = "Seattle, Washington, United States";

var person3 = new Object();
person3.FirstName = "Tim";
person3.LastName = "Cook";
person3.Office_Address = "Cupertino, California";

console.log("The first person is -");
console.log(person1.FirstName, person1.LastName);
console.log("Address : ", person1.Office_Address);
console.log("\nThe second person is -");
console.log(person2.FirstName, person2.LastName);
console.log("Address : ", person2.Office_Address);
console.log("\nThe third person is -");
console.log(person3.FirstName, person3.LastName);
console.log("Address : ", person3.Office_Address);