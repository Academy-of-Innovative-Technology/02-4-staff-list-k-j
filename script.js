//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////

let
	Admin = ["Fowlkes", "Lynch", "Woodham", "Stahl", "Peter"],
	CTE = ["Alphonse", "Donahue", "Santana", "Vaduva", "Woods", "Shams", "Urena"],
	History = ["McQuilkin", "Amell", "Hablenko", "Schmidt", "Headlam", "Lucas", "Smith"],
	Counselor = ["Grant", "Weaver"],
	Maths = ["Freck", , "Ventimiglia"],
	Gym = ["Banta", "Proper", "Moll", "Murray"],
	Dean = ["Frazier", "Vaduva", "Mollison"],
	Language = ["Levystone", "Ortiz", "Stratman", "Vaduva", "Streeter", "Weaver"],
	Science = ["Koelsch", "Willet", "Lagana", "Fonrose"],
	English = ["Brown", "DelValle", "Duran", "Griszell", "King", "Fonrose", "Constant"],
	Office = ["Verley"],
	Support = ["Kabir", "Minto"],
	SSC = ["Stephine"];


//////// DO NOT EDIT ABOVE THIS LINE ////////////////
/////////////////////////////////////////////////////

////////// MAKE YOUR UPDATES WITHIN THIS SECTION //// 

let Guidance = ["Molina"];
let Paraprofessional = ["Albsi","Camila","Colter", "Ward", "Ahad", "Shand", "Nicholson", "J.Grant", "Belton", "Damari"];
let Intern = ["Blackman" , "Williams"];



Admin.splice(3);
Admin.shift();
Admin.shift();

Admin.push("Drysdale");
Admin.push("Simpkins");


CTE.splice(1,4);
CTE.splice(2);

CTE.push("Pelzer");
CTE.push("Pierre");
CTE.push("Ramsawak");
CTE.push("Gomez");
CTE.push("Rahimi");
CTE.push("Frazer");
CTE.push("Sullivan");

History.shift();
History.splice(1,2);

History.push("Urena");

Counselor.splice(1);
Counselor.shift();

Counselor.push("Cooper");
Counselor.push("Desroches");	





Maths.splice(1);

Maths.push("Koelsch");
Maths.push("Minto");
Maths.push("Forth");
Maths.push("Wong");

Gym.splice(1);
Gym.push("Mcalary");

Dean.splice(1,1);


Language.splice(1,4);
Language.shift();

Language.push("Vallejo");
Language.push("Nowakowski");


Science.splice(0);
Science.push("Davies", "Lynch", "Simpkins", "Boswell");


English.splice(4);
English.splice(0, 3);

English.push("Grant");
English.push("Gomez");
English.push("Tavares");


Office.shift();
Office.push("Martinez");
Office.push("Tirado");
Office.push("Valentin");
Office.push("Swing");


Support.pop();
Support.push("Rodriguez");
Support.push("Steele");
Support.push("Sherman");
Support.push("David");
Support.push("Slater");
Support.push("Jorge");
Support.push("Belgrave");


SSC.shift();
SSC.push("Guzman");

Intern.push("Kristie");
Intern.push("Rachel");
Intern.push("Griszell");
Intern.push("Morgan");



























/////////////////////////////////////////////////////
//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////


const STAFF = [Admin, Office, Counselor, CTE, History, Maths, Gym, Dean, Language, Science, English, Support, SSC, Guidance, Paraprofessional, Intern];
e("table").innerHTML = createTableCotents();