using AutoMapper;
using BlackJack.Entities;
using BlackJack.GameViewModel;
using BlackJack.ViewModels.GameViewModel;
using BlackJack.ViewModels.HistoryViewModel;

namespace BlackJack.Config
{
    public class AutoMapperConfig
    {
        public static void Initialize()
        {
            Mapper.Initialize(x =>
            {
                x.CreateMap<Player, PlayerCurrentGameGameViewItem>();
                x.CreateMap<Player, PlayerEndGameGameViewItem>();
                x.CreateMap<Player, PlayerGameDetailsHistoryViewItem>();
            });
        }
    }
}
