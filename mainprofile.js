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

db.collection("Teachers").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(JSON.stringify(doc.data()));
        var obj = JSON.parse(JSON.stringify(doc.data()));
       
        par_elem = document.createElement('div');
        par_elem.className = 'card mb-3';
        par_elem.style = "max-width: 540px;";
        combine_elem = document.createElement('div');
        combine_elem.className = "row-no-gutters";
        img_elem = document.createElement('div');
        img_elem.className = "col-md-4";
        image = document.createElement('img');
        image.src = "woman.png";
        image.alt = "...";
        image.style.height = "100px";
        image.style.width = "100px";
        img_elem.appendChild(image);
        combine_elem.appendChild(img_elem);
        text_elem = document.createElement('div');
        text_elem.className = 'col-md-8';
        cardbody = document.createElement('div');
        cardbody.className = "card-body";
        head = document.createElement('h4');
        head.className = "card-title";
        head.innerHTML = obj.Name;
        head.style.fontWeight = 'bold';
        para = document.createElement('p');
        para.className = 'card-text';
        para.innerHTML = "Leaves taken: " + obj.Leaves_taken + "  Leaves left: " + obj.Leaves_left;
        para2 = document.createElement('p');
        para2.className = 'card-text';
        para2.innerHTML = "Subjects: " + obj.class_subject.subject;
        cardbody.appendChild(head);
        cardbody.appendChild(para);
        cardbody.appendChild(para2);
        text_elem.appendChild(cardbody);
        combine_elem.appendChild(text_elem);
        par_elem.appendChild(combine_elem);
        document.getElementById('teacher-profile-container').appendChild(par_elem);
    });
});
