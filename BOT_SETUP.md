# WingMate AI Telegram Bot Setup Guide

## Prerequisites

1. Node.js 16+ and npm installed
2. PostgreSQL database
3. Telegram Bot Token (obtain from [@BotFather](https://t.me/BotFather))
4. A domain with SSL for webhook (in production)

## Initial Setup

1. **Clone the repository and install dependencies:**
   ```bash
   git clone <repository-url>
   cd wingmate-ai
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and fill in your configuration values.

3. **Set up the database:**
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

## Development Setup

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Set up the bot in development mode:**
   ```bash
   npm run bot:dev
   ```

## Production Setup

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Set up the bot in production mode:**
   ```bash
   npm run bot:prod
   ```

## Bot Commands

The following commands are available:

- `/start` - Start using WingMate AI
- `/help` - Show available commands
- `/profile` - View and edit your profile
- `/settings` - Adjust bot settings
- `/advice` - Get dating advice
- `/stats` - View your conversation statistics
- `/pause` - Pause the assistant
- `/resume` - Resume the assistant

## Features

- Smart conversation handling with sentiment analysis
- Profile setup and preferences management
- Pre-date advice and coaching
- Intelligent conversation starters
- Real-time conversation analysis
- Dating progress tracking

## Webhook Setup

For production, you need to set up a webhook:

1. Set `TELEGRAM_WEBHOOK_URL` in your `.env` file to your domain:
   ```
   TELEGRAM_WEBHOOK_URL="https://your-domain.com/api/telegram/webhook"
   ```

2. Generate a webhook secret and set it in your `.env`:
   ```
   TELEGRAM_WEBHOOK_SECRET="your-secret-here"
   ```

3. Run the bot setup script:
   ```bash
   npm run bot:prod
   ```

## Development Notes

- Use `npm run prisma:studio` to view/edit database entries
- Monitor logs using the configured LOG_LEVEL
- Test webhook endpoints at `/api/telegram/webhook`
- Check bot status at `/api/telegram/status`

## Database Schema

The bot uses the following main tables:
- `TelegramProfile`: Bot-specific user data
- `Conversation`: Chat history and context
- `Message`: Individual messages with analysis
- `ConversationInsight`: AI-generated insights
- `DateAdvice`: Personalized dating advice
- `ConversationStarter`: Smart conversation starters

## Troubleshooting

1. **Webhook Issues:**
   - Ensure your domain has valid SSL
   - Check webhook info using Telegram API
   - Verify webhook URL is accessible

2. **Database Issues:**
   - Verify DATABASE_URL is correct
   - Check database permissions
   - Run migrations if needed

3. **Bot Not Responding:**
   - Verify TELEGRAM_BOT_TOKEN is correct
   - Check bot is running (`/start` command)
   - Monitor server logs for errors

## Security Notes

- Keep your .env file secure and never commit it
- Regularly rotate webhook secrets
- Monitor rate limits and adjust as needed
- Keep dependencies updated
- Use environment variables for sensitive data
- Implement proper error handling

## Rate Limiting

The bot implements rate limiting to prevent abuse:
- Message limits: 30 messages per minute per user
- Command limits: 20 commands per minute per user
- Configurable through environment variables

## Error Handling

The bot implements comprehensive error handling:
- Graceful error messages to users
- Detailed error logging
- Automatic retry mechanisms
- Rate limit notifications
- Database connection error handling

## Support

For issues and support:
1. Check the troubleshooting guide
2. Review server logs
3. Contact the development team

## Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

See LICENSE file in the repository.
