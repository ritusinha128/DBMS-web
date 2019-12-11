var firebaseConfig = {
    apiKey: "AIzaSyAd9A9F-TDppOtIYtVa1-u6qTbFjQkSiJY",
    authDomain: "casualleave-d4059.firebaseapp.com",
    databaseURL: "https://casualleave-d4059.firebaseio.com",
    projectId: "casualleave-d4059",
    storageBucket: "casualleave-d4059.appspot.com",
    messagingSenderId: "652795448837",
    appId: "1:652795448837:web:e981fe5636a73e6362166c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

db.collection("Department").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(JSON.stringify(doc.data()));
        var obj = JSON.parse(JSON.stringify(doc.data()));
        console.log(obj.Teacher);
        if (obj.isApproved=="Yes")
        {
        var elem = document.createElement('div');
        elem.className = 'card text-white bg-dark mb-3';
        var elembody = document.createElement('div');
        elembody.className = 'card-body';
        var cardBody = document.createElement('p');
        var s = "";
        for (var i=0; i< obj.Dates.length; i++)
            s += obj.Dates[i] + "    "; 
        cardBody.innerHTML = s;
        var cardTitle = document.createElement('h2');
        cardTitle.style.color = "orange";
        cardTitle.innerText = obj.Teacher;
        cardTitle.className = 'card-title';
        var cardBody2 = document.createElement('p');
        cardBody2.className = 'card-body';
        cardBody2.innerHTML = 'Substitute teachers assigned: ' + obj.Substitutes;
        elembody.appendChild(cardTitle);
        elembody.appendChild(cardBody);
        elembody.appendChild(cardBody2);
        elem.appendChild(elembody);
        
        //elem.innerHTML = JSON.stringify(doc.data());
        document.getElementById('teacher-container').appendChild(elem);
    }  });
});



