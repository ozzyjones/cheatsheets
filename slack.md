Slack
=====

Cleaning History
----------------

See [this project](https://github.com/sgratzl/slack-cleaner) on GitHub

```bash
pip install -e git+https://github.com/sgratzl/slack-cleaner.git#egg=slack-cleaner

# Delete all messages from a direct message channel
slack-cleaner --token <TOKEN> --message --direct sherry --user johndoe

# Delete all messages older than 2015/09/19
slack-cleaner --token <TOKEN> --message --channel general --user "*" --before 20150919

# Delete all messages from bots (especially flooding CI updates)
slack-cleaner --token <TOKEN> --message --channel auto-build --bot
slack-cleaner --token <TOKEN> --message --direct johndoe --before 20180320 --bot

# A rate may need to be set to throttle the API call rate
slack-cleaner --token <TOKEN> --message --direct johndoe --before 20180320 --bot --rate=1
```