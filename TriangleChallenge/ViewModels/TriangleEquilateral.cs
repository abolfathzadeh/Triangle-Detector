using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TriangleChallenge.ViewModels
{
    public class TriangleEquilateral : Triangle, ITriangle
    {
        public TriangleEquilateral(int a, int b, int c)
            : base(a, b, c)
        {

        }
        public override bool IsTriangle()
        {
            if (x == y && y == z && base.IsTriangle())
                    return true;
                else
                    return false;
            
        }

        
    }
}