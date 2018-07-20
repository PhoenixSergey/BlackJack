using System;

namespace BusinessLogic
{
    public class AppValidationException : Exception
    {
        public AppValidationException(string message) : base(message)
        {
        }
    }
}
