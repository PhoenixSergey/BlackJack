using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.Services.Interfaces
{
    public interface IBaseService
    {
        Task<int> CalculationPlayerCardSum(int playersOnTheGameId, int gameId);
    }
}
