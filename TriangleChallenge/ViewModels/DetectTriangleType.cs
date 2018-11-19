using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TriangleChallenge.ViewModels
{
    public class DetectTriangleType
    {
        ITriangle triangle = null;
        public bool Detector(ITriangle concreteTriangle)
        {
            triangle = concreteTriangle;
            return triangle.IsTriangle();
        }
    }
}