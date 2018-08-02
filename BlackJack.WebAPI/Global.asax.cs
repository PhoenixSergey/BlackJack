using Autofac;
using Autofac.Integration.WebApi;
using BlackJack.Config;
using BusinessLogic;
using System.Configuration;
using System.Reflection;
using System.Web.Http;

namespace BlackJack.WebAPI
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            var builder = new ContainerBuilder();
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            AutofacServicesConfig.ConfigureContainer(builder, connectionString);
            var container = builder.Build();
            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(container);
            GlobalConfiguration.Configure(WebApiConfig.Register);
            AutoMapperConfig.Initialize();
        }
    }
}
