using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TriangleChallenge.ViewModels
{
    public class TriangleScalene:Triangle,ITriangle
    {
        public TriangleScalene(int a,int b, int c):base(a,b,c)
        {

        }
        
        public override bool IsTriangle()
        {

            if (x != y && y != z && z != x && base.IsTriangle())
            {
                return true;
            }
            else
                return false;
        }

        
    }
}