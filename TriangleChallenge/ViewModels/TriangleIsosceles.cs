using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TriangleChallenge.ViewModels
{
    public class TriangleIsosceles:Triangle,ITriangle
    {
        public TriangleIsosceles(int a, int b, int c)
            : base(a, b, c)
        {

        }
        public override bool IsTriangle()
        {
            if (((x == y && x != z) || (x == z && z != y) || (y == z && z != x)) && base.IsTriangle())
                return true;
            else
                return false;
        }
        
    }
}