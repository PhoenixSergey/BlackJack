using Autofac;
using BlackJack.DataAcces;
using BusinessLogic.Interfaces;
using BusinessLogic.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic
{
    public class AutofacWebAPIServicesConfig
    {
        public static IContainer ConfigureAPIContainer(ContainerBuilder builder, string connectionString)
        {
            builder.RegisterType<HistoryService>().As<IHistoryService>().InstancePerRequest();
            builder.RegisterType<MappingServices>().As<IMappingService>().InstancePerRequest();
            builder.RegisterType<GameService>().As<IGameService>().InstancePerRequest();
            var container =  AutofacWebAPIRepositoriesConfig.ConfigureWebAPIContainer(builder, connectionString);
            return container;
        }
    }
}
