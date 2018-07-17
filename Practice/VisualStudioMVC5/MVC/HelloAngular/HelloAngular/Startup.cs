using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HelloAngular.Startup))]
namespace HelloAngular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
