$(function () {
    var ViewModel = function (Side1, Side2, Side3) {
        this.Side1 = ko.observable(Side1);
        this.Side2 = ko.observable(Side2);
        this.Side3 = ko.observable(Side3);

        this.sResult = ko.pureComputed(function () {
            if (this.Side1() == "" || this.Side2() == "" || this.Side3() == "")
                return "......";
            else {
               try
                {
                    var t = CheckResult(this.Side1(), this.Side2(), this.Side3());
                    return t;
                }
                catch(error)
                {
                    return error;
                    //logingError(error)
                }
            }

        }, this);
        
    };

    ko.applyBindings(new ViewModel("", "", ""));
});
function IsTriangle(s1, s2, s3)
{
    if ((Number(s1) + Number(s2) >= Number(s3))
        && (Number(s1) + Number(s3) >= Number(s2))
        && (Number(s2) + Number(s3) >= Number(s1)))
        return "true";
    else
        return "false";
}
function CheckResult(s1, s2, s3) {
    var res = "";
    
    if (IsTriangle(s1, s2, s3) == "false")
        return "It is not Triangle";
    else
        if ((s1 == s2 && s1 == s3)// && IsTriangle(s1, s2, s3) == "true"
            )
            return "equilateral";
        else if ((s1 != s2 && s1 != s3 && s2 != s3) //&& IsTriangle(s1, s2, s3) == "true"
            )
            return "scelence";
        else if (((s1 == s2 && s1 != s3) || (s1 == s3 && s3 != s2) || (s2 == s3 && s3 != s1)) //&& IsTriangle(s1, s2, s3) == "true"
            )
            return "Isosceles";
    else
        return "It is not Triangle";
   
}
