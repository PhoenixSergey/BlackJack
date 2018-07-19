using Autofac;
using Autofac.Integration.Mvc;
using BlackJack.DataAcces.Interfaces;
using BlackJack.DataAcces.Repositorys;
using System.Web.Mvc;

namespace BlackJack.DataAcces
{
    public class AutofacRepositoriesConfig
    {
        public static void ConfigureContainer(ContainerBuilder builder, string connectionString)
        {
            builder.RegisterType<PlayerRepository>().As<IPlayerRepository>().WithParameter("connectionString", connectionString);
            builder.RegisterType<RoundRepository>().As<IRoundRepository>().WithParameter("connectionString", connectionString);
            builder.RegisterType<GameRepository>().As<IGameRepository>().WithParameter("connectionString", connectionString);
            builder.RegisterType<PlayerGameRepository>().As<IPlayerGameRepository>().WithParameter("connectionString", connectionString);
            builder.RegisterType<CardRepository>().As<ICardRepository>().WithParameter("connectionString", connectionString);          
            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}
