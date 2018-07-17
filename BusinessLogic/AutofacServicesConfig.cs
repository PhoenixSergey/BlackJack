using Autofac;
using BlackJack.DataAcces;
using BusinessLogic.Interfaces;
using BusinessLogic.Services;

namespace BusinessLogic
{
    public class AutofacServicesConfig
    {
        public static void ConfigureContainer(ContainerBuilder builder, string connectionString)
        {
            builder.RegisterType<HistoryService>().As<IHistoryService>();
            builder.RegisterType<MappingServices>().As<IMappingService>();
            builder.RegisterType<GameServices>().As<IGameService>();
            AutofacRepositoriesConfig.ConfigureContainer(builder, connectionString);
        }
    }
}
