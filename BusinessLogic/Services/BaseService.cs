using BlackJack.Config;
using BlackJack.DataAcces.Interfaces;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessLogic.Services
{
    public class BaseService 
    {
        private readonly IRoundRepository _roundRepository;

        public BaseService(
            IRoundRepository roundRepository
         )
        {
            _roundRepository = roundRepository;
        }

        public async Task<int> CalculationPlayerCardSum(int playersOnTheGameId, int gameId)
        {
            int cardSum = Config.ZeroingOutCardSum;
            var cardsForPlayer = (await _roundRepository.GetAllRoundsInTheGame(gameId))
            .Where(round => round.PlayerId == playersOnTheGameId)
            .Select(round => round.Card)
            .ToList();

            foreach (var card in cardsForPlayer)
            {
                cardSum += card.Value;
                if (cardSum > Config.BlackJack && card.Name == Config.AceName)
                {
                    card.Value = Config.DoubleAcePoint;
                    cardSum -= Config.DoubleAcePointReduce;
                }
            }
            return cardSum;
        }
    }
}
