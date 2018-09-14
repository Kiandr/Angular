using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Angular103.Startup))]
namespace Angular103
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
