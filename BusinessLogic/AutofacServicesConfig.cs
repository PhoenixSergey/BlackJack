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
            builder.RegisterType<HistoryService>().As<IHistoryService>().InstancePerRequest();
            builder.RegisterType<MappingServices>().As<IMappingService>().InstancePerRequest();
            builder.RegisterType<GameService>().As<IGameService>().InstancePerRequest();
            AutofacRepositoriesConfig.ConfigureContainer(builder, connectionString);
        }
    }
}
