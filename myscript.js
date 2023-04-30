var StudentNumberV, nameV, genderV, addressV;

function readFom() {
  StudentNumberV = document.getElementById("Student").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  console.log(StudentNumberV, nameV, addressV, genderV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("Student Number & Data/" + StudentNumberV)
    .set({
      studentNo: StudentNumberV,
      name: nameV,
      gender: genderV,
      address: addressV,
    });
  alert("Data Inserted");
  document.getElementById("Student").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("Student Number & Data/" + StudentNumberV)
    .on("value", function (snap) {
      document.getElementById("Student").value = snap.val().studentNo;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("gender").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("Student Number & Data/" + StudentNumberV)
    .update({
      //   studentNo: StudentNumberV,
      name: nameV,
      gender: genderV,
      address: addressV,
    });
  alert("Data Update");
  document.getElementById("Student").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("Student Number & Data/" + StudentNumberV)
    .remove();
  alert("Data Deleted");
  document.getElementById("Student").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};