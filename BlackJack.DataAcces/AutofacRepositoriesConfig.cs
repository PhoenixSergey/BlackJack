using Autofac;
using Autofac.Integration.Mvc;
using BlackJack.DataAcces.Interfaces;
using BlackJack.DataAcces.Repositorys;
using BlackJack.Entities;
using System.Web.Mvc;

namespace BlackJack.DataAcces
{
    public class AutofacRepositoriesConfig
    {
        public static void ConfigureContainer(ContainerBuilder builder, string connectionString)
        {
            builder.RegisterType<PlayerRepository>().As<IPlayerRepository<Player>>().WithParameter("connectionString", connectionString);
            builder.RegisterType<RoundRepository>().As<IRoundRepository<Round>>().WithParameter("connectionString", connectionString);
            builder.RegisterType<GameRepository>().As<IGameRepository<Game>>().WithParameter("connectionString", connectionString);
            builder.RegisterType<PlayerGameRepository>().As<IPlayerGameRepository<PlayerGame>>().WithParameter("connectionString", connectionString);
            builder.RegisterType<CardRepository>().As<ICardRepository<Card>>().WithParameter("connectionString", connectionString);          
            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}
