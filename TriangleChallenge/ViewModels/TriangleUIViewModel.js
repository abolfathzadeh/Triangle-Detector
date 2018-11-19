$(function () {
    var ViewModel = function (Side1, Side2, Side3) {
        this.Side1 = ko.observable(Side1);
        this.Side2 = ko.observable(Side2);
        this.Side3 = ko.observable(Side3);

        this.CheckTriangleType = function () {
            try{
                if (this.Side1() != "" && this.Side2() != "" && this.Side3() != "") {
                    CheckResult(this.Side1(), this.Side2(), this.Side3());
                }
            }
            catch(error)
            {
                alert(error)
                
            }
        }
    };

    ko.applyBindings(new ViewModel("", "", ""));
});


function CheckResult(s1, s2, s3) {

    //parent triangle
    function Triangle(x, y, z) {
        this.x = Number(x);
        this.y = Number(y);
        this.z = Number(z);
    }
    Triangle.prototype.IsValidData = function () {
        if ((Number(this.x) >0)
            && (Number(this.z) >0)
            && (Number(this.y) >0))
            return "true";
        else
            return "false";
    }
    Triangle.prototype.IsTriangle = function () {
        if ((Number(this.x) + Number(this.y) >= Number(this.z)) 
            && (Number(this.x) + Number(this.z) >= Number(this.y))
            && (Number(this.y) + Number(this.z) >= Number(this.x))
           && Number(this.x) > 0
         && Number(this.y) > 0
        && Number(this.x) > 0)
            return "true";
        else
            return "false";
    }

    function TriangleEquilateral(x, y, z) {
        Triangle.call(this, x, y, z)// Call parent constructor
    }

    function TriangleIsosceles(x, y, z) {
        Triangle.call(this, x, y, z)// Call parent constructor
    }

    function TriangleScalene(x, y, z) {
        Triangle.call(this, x, y, z)// Call parent constructor
    }



    TriangleEquilateral.prototype = new Triangle();// Chain TriangleEquilateral prototype to Triangle
    TriangleIsosceles.prototype = new Triangle();// Chain TriangleIsosceles prototype to Triangle
    TriangleScalene.prototype = new Triangle();// Chain TriangleScalene prototype to Triangle


    TriangleEquilateral.prototype.constructor = TriangleEquilateral;// Define constructor for this prototype
    TriangleIsosceles.prototype.constructor = TriangleIsosceles;// Define constructor for this prototype
    TriangleScalene.prototype.constructor = TriangleScalene;// Define constructor for this prototype

    TriangleEquilateral.prototype.IsEquilateral = function () {
        if (this.IsTriangle() == "true"  && this.IsValidData()=="true" && this.x == this.y && this.y == this.z)
            return "true";
        else
            return "false";
    }

    TriangleIsosceles.prototype.IsIsosceles = function () {
        if (this.IsTriangle() == "true"  && this.IsValidData()=="true" &&
            ((this.x == this.y && this.x != this.z) ||
             (this.x == this.z && this.z != this.y) ||
             (this.y == this.z && this.z != this.x)))
            return "true";
        else
            return "false";
    }
    TriangleScalene.prototype.IsScalene = function () {
        if (this.IsTriangle() == "true"  && this.IsValidData()=="true" &&
            (this.x != this.y && this.y != this.z && this.z != this.x))
            return "true";
        else
            return "false";
    }
    
    var TriangleEquilateral = new TriangleEquilateral(s1, s2, s3)
    var TriangleIsosceles = new TriangleIsosceles(s1, s2, s3)
    var TriangleScalene = new TriangleScalene(s1, s2, s3)
    var ok = "<i class='glyphicon glyphicon-ok'></i>&nbsp;";
    var NotOk = "<i class='glyphicon glyphicon-remove'></i>&nbsp;";
    if (TriangleEquilateral.IsValidData() == "false"
        || TriangleIsosceles.IsValidData() == "false" || TriangleScalene.IsValidData() == "false") res = (NotOk+" Please enter All sides");
    else if (TriangleEquilateral.IsEquilateral() == "true")
        res = (ok + "Equilateral Triangle");
    else if (TriangleIsosceles.IsIsosceles() == "true")
        res = (ok + "Isosceles Triangle");
    else if (TriangleScalene.IsScalene() == "true")
        res = (ok+"Scalene Triangle");
    else
    res = (NotOk+" This is no triangle!");

    alertify.alert('<div class="alertify-alert" style="text-align:center;margin:10px;"><div style="background-color:#F8F8FF;padding-top: 2px;padding-bottom: 10px;border-color: darkblue;border: rgba(0, 255, 50, 0.13);border-style: dotted;">' + res + '</div></div>');
    $("#alertify-ok").text("Close");
    alertify.set({ buttonFocus: "ok" });
}
