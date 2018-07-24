using Autofac;
using Autofac.Integration.Mvc;
using BlackJack.DataAcces.Interfaces;
using BlackJack.DataAcces.Repositorys;
using BlackJack.Entities;
using System.Web.Mvc;

namespace BlackJack.DataAcces
{
    public class AutofacWebAPIRepositoriesConfig
    {
        public static IContainer ConfigureWebAPIContainer(ContainerBuilder builder, string connectionString)
        {
            builder.RegisterType<PlayerRepository>().As<IPlayerRepository<Player>>().WithParameter("connectionString", connectionString).InstancePerRequest();
            builder.RegisterType<RoundRepository>().As<IRoundRepository<Round>>().WithParameter("connectionString", connectionString).InstancePerRequest();
            builder.RegisterType<GameRepository>().As<IGameRepository<Game>>().WithParameter("connectionString", connectionString).InstancePerRequest();
            builder.RegisterType<PlayerGameRepository>().As<IPlayerGameRepository<PlayerGame>>().WithParameter("connectionString", connectionString).InstancePerRequest();
            builder.RegisterType<CardRepository>().As<ICardRepository<Card>>().WithParameter("connectionString", connectionString).InstancePerRequest();
            var container = builder.Build();
            return container;
        }
    }
}
