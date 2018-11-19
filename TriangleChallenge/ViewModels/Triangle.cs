using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TriangleChallenge.ViewModels
{
    public class Triangle:ITriangle
    {
        protected int x, y, z;
        public Triangle(int a, int b, int c)
        {
            x = a;
            y = b;
            z = c;
        }
        public Triangle()
        {
            x = 0;
            y = 0;
            z = 0;
        }
        public virtual bool IsTriangle()
        {
            if ((x + y < z) || (x + z < y) || (y + z < x))
                return false;
            else
                return true;
        }
    }
}