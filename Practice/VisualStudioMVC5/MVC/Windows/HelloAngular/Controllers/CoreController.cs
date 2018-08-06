// Copy right Enliven Financial Inc, 2018
// Developer: Kian D.Rad Aug 2018

#region NameSpaces

using System.Web.Http;
using System.Web.Http.Cors;

#endregion

#region Core WebAPI Public End-Points

namespace HelloAngular.Controllers
{
    //[EnableCors("http://localhost", "Accept, Origin, Content-Type", "GET,POST")]
    [System.Web.Mvc.Route("api/core")]
    public class CoreController : ApiController
    {
        #region Public Test APIs

        /* The following methods are being utilized for testing proposes*/

        /// <summary>
        ///     Public HTTP OK.
        /// </summary>
        /// <returns></returns>
        [EnableCors("*", "Accept, Origin, Content-Type", "GET")]
        [System.Web.Mvc.Route("api/core/home")]
        [HttpGet]
        [AcceptVerbs("GET")]
        public IHttpActionResult Home()
        {
            return Ok();
        }

        /// <summary>
        ///     Public HTTP OK.
        /// </summary>
        /// <returns></returns>
        [EnableCors("*", "Accept, Origin", "POST")]
        [System.Web.Mvc.Route("api/core/test")]
        [HttpPost]
        [AcceptVerbs("POST")]
        [WebApiValidateAntiForgeryToken]
        public IHttpActionResult test()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var body = new
            {
                items = new[]
                {
                    new {name = "command", index = "X", optional = "0"},
                    new {name = "command", index = "X", optional = "0"}
                }
            };
            return Ok(body);
        }

        #endregion

        #region Constructor

        /* Public Constructors, avoid overloads. Preferred dependency injection*/

        #endregion

        #region Private Members

        /* The following members are being used to support public methods*/

        #endregion

        #region Public API

        /* Public members are being utilized by Angular and iOS consumers.*/
        /// <summary>
        ///     Login method. This is being used to log user into system
        /// </summary>
        /// <returns></returns>
        //[EnableCors("http://localhost", "Accept, Origin, Content-Type", "POST")]
        [System.Web.Mvc.Route("api/core/login")]
        [HttpPost]
        [AcceptVerbs("POST")]
        [WebApiValidateAntiForgeryToken]
        public IHttpActionResult Login()
        {
            return Ok();
        }

        /// <summary>
        ///     Logout. This is being used to log user out of server.
        /// </summary>
        /// <returns></returns>
        //[EnableCors("http://localhost", "Accept, Origin, Content-Type", "POST")]
        [System.Web.Mvc.Route("api/core/logout")]
        [HttpPost]
        [AcceptVerbs("POST")]
        [WebApiValidateAntiForgeryToken]
        public IHttpActionResult LogOut()
        {
            return Ok();
        }

        /// <summary>
        ///     Reset. This method is being used to reset the user password.
        /// </summary>
        /// <returns></returns>
        //[EnableCors("http://localhost", "Accept, Origin, Content-Type", "POST")]
        [System.Web.Mvc.Route("api/core/reset")]
        [HttpPost]
        [AcceptVerbs("POST")]
        [WebApiValidateAntiForgeryToken]
        public IHttpActionResult Reset()
        {
            return Ok();
        }

        /// <summary>
        ///     Register. This method is being used to register a user with "Borrower" role request.
        /// </summary>
        /// <returns></returns>
        //[EnableCors("http://localhost", "Accept, Origin, Content-Type", "POST")]
        [System.Web.Mvc.Route("api/core/register")]
        [HttpPost]
        [AcceptVerbs("POST")]
        [WebApiValidateAntiForgeryToken]
        public IHttpActionResult Register()
        {
            return Ok();
        }

        /// <summary>
        ///     This method is being used by Angular and iOS to delete a "Borrower" role model from the system.
        /// </summary>
        /// <returns></returns>
        //[EnableCors("http://localhost", "Accept, Origin, Content-Type", "POST")]
        [System.Web.Mvc.Route("api/core/delete")]
        [HttpPost]
        [AcceptVerbs("POST")]
        [WebApiValidateAntiForgeryToken]
        public IHttpActionResult Delete()
        {
            return Ok();
        }

        #endregion
    }
}

#endregion