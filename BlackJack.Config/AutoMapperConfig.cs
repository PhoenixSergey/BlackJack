using AutoMapper;
using BlackJack.Entities;
using BlackJack.GameViewModel;

namespace BlackJack.Config
{
    public class AutoMapperConfig
    {
        public static void Initialize()
        {
            Mapper.Initialize(cfg => cfg.CreateMap<Player, PlayerCurrentGameGameViewItem>());
        }
    }
}
