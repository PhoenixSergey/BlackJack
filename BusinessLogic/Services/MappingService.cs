using AutoMapper;
using BlackJack.DataAcces.Interfaces;
using BlackJack.Entities;
using BlackJack.GameViewModel;
using BlackJack.ViewModels.GameViewModel;
using BlackJack.ViewModels.HistoryViewModel;
using BusinessLogic.Interfaces;

namespace BusinessLogic
{
    public class MappingServices : IMappingService
    {
        #region references
        private readonly IPlayerRepository<Player> _playerRepository;
        public MappingServices(IPlayerRepository<Player> playerRepository)
        {
            _playerRepository = playerRepository;
        }
        #endregion

        public PlayerCurrentGameGameViewItem PlayerToPlayerCurrentGame(Player player)
        {
            var playerCurrentGameGameView = Mapper.Map<Player, PlayerCurrentGameGameViewItem>(player);      
            return playerCurrentGameGameView;
        }

        public PlayerEndGameGameViewItem PlayerToPlayerEndGame(Player player)
        {
            var playerEndGameViewItem = Mapper.Map<Player, PlayerEndGameGameViewItem>(player);
            return playerEndGameViewItem;
        }

        public PlayerGameDetailsHistoryViewItem PlayerToPlayerGameDetails(Player player)
        {
            var playerGameDetailsHistoryViewItem = Mapper.Map<Player, PlayerGameDetailsHistoryViewItem>(player);
            return playerGameDetailsHistoryViewItem;
        }
    }
}
