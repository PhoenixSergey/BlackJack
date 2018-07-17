using AutoMapper;
using BlackJack.DataAcces.Interfaces;
using BlackJack.Entities;
using BlackJack.Entities.Enum;
using BlackJack.GameViewModel;
using BlackJack.ViewModels.GameViewModel;
using BlackJack.ViewModels.GameViewModel.Enum;
using BusinessLogic.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public class MappingServices : IMappingService
    {
       
        private readonly IPlayerRepository _playerRepository;
        private readonly ICardRepository _cardRepository;
        public MappingServices(IPlayerRepository playerRepository, ICardRepository cardRepository)
        {
            _cardRepository = cardRepository;
            _playerRepository = playerRepository;
        }

        public async Task<PlayerCurrentGameGameViewItem> PlayerToPlayerCurrentGame(Player player)
        {
            var playerCurrentGameGameView = Mapper.Map<Player, PlayerCurrentGameGameViewItem>(player);
            playerCurrentGameGameView.Result = (ResultViewModel)Result.InGame;
            return playerCurrentGameGameView;
        }

        public async Task<PlayerEndGameGameViewItem> PlayerToPlayerEndGame(Player player)
        {
            PlayerEndGameGameViewItem playerEndGameViewItem = new PlayerEndGameGameViewItem
            {
                Id = player.Id,
                Name = player.Name,
                Role = (RoleViewModel)player.Role
            };

            return playerEndGameViewItem;
        }

        public async Task<CardCurrentGameGameViewItem> CardToCardCurrentGame(Card card)
        {
            var cardCurrentGameGameViewItem = Mapper.Map<Card, CardCurrentGameGameViewItem>(card);
            return cardCurrentGameGameViewItem;
        }

        public async Task<CardEndGameGameViewItem> CardToCardEndGame(Card card)
        {
            var cardEndGameGameViewItem = Mapper.Map<Card, CardEndGameGameViewItem>(card);
            return cardEndGameGameViewItem;
        }

        public async Task<StartInfoGameViewModel> SelectAllHumanPlayers()
        {
            List<PlayerStartInfoGameViewItem> listHumanPlayer = new List<PlayerStartInfoGameViewItem>();
           
            List<Player> humanPlayers = (await _playerRepository.GetAllHumanPlayer()).ToList();
            StartInfoGameViewModel allHumanPlayers = new StartInfoGameViewModel();
            foreach (Player player in humanPlayers)
            {
                var playerViewModel = new PlayerStartInfoGameViewItem
                {
                    Name = player.Name
                };
                allHumanPlayers.HumanPLayers.Add(playerViewModel);
            }
            return allHumanPlayers;
        }
    }
}
