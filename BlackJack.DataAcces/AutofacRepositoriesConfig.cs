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
            builder.RegisterType<PlayerRepository>().As<IPlayerRepository>().WithParameter("connectionString", connectionString).InstancePerRequest();
            builder.RegisterType<RoundRepository>().As<IRoundRepository>().WithParameter("connectionString", connectionString).InstancePerRequest();
            builder.RegisterType<GameRepository>().As<IGameRepository>().WithParameter("connectionString", connectionString).InstancePerRequest();
            builder.RegisterType<PlayerGameRepository>().As<IPlayerGameRepository>().WithParameter("connectionString", connectionString).InstancePerRequest();
            builder.RegisterType<CardRepository>().As<ICardRepository>().WithParameter("connectionString", connectionString).InstancePerRequest();          
            
        }
    }
}
