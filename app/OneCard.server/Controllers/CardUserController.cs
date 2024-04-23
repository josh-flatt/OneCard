using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OneCard.server.Data;
using OneCard.server.Models;

namespace OneCard.server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardUserController : ControllerBase
    {
        private readonly DataContext _context;

        public CardUserController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetCardUsers()
        {
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpGet("id/{userId}")]
        public async Task<ActionResult<User>> GetCardUserById(int userId)
        {
            //int intUserId = Int32.Parse(userId);
            int intUserId = userId;
            var dbUser = await _context.Users.FindAsync(intUserId);
            if (dbUser == null)
            {
                return BadRequest($"User '{userId}' not found.");
            }
            return Ok(dbUser);

        }

        [HttpGet("username/{userUsername}")]
        public async Task<ActionResult<User>> GetCardUserByUsername(string userUsername)
        {
            var dbUsers = await _context.Users.ToListAsync();
            foreach (var dbUser in dbUsers)
            {
                if (dbUser.UserUsername.Contains(userUsername))
                {
                    return Ok(dbUser);
                }
            }
            return BadRequest($"User '{userUsername}' not found.");

        }


        [HttpPost]
        public async Task<ActionResult<List<User>>> CreateCardUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }


        [HttpPut]
        public async Task<ActionResult<List<User>>> UpdateCardUser(User user)
        {
            var dbUser = await _context.Users.FindAsync(user.UserId);
            if (dbUser == null)
            {
                return BadRequest("User not found.");
            }

            dbUser.UserFirstName = user.UserFirstName;
            dbUser.UserLastName = user.UserLastName;
            dbUser.UserEmail = user.UserEmail;
            dbUser.UserAddress = user.UserAddress;
            dbUser.UserUsername = user.UserUsername;
            dbUser.UserAddress = user.UserAddress;
            dbUser.UserJobTitle = user.UserJobTitle;
            dbUser.UserJobDescription = user.UserJobDescription;
            dbUser.UserDescription = user.UserDescription;

            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpDelete("{userId}")]
        public async Task<ActionResult<List<User>>> DeleteCardUser(int userId)
        {
            var dbUser = await _context.Users.FindAsync(userId);
            if (dbUser == null)
            {
                return BadRequest("User not found.");
            }

            _context.Users.Remove(dbUser);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }
    }
}
