# Generated by Django 2.2.17 on 2021-03-22 00:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Affiliations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('affiliation', models.CharField(max_length=2000, verbose_name='Affiliation')),
            ],
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField(blank=True, null=True, verbose_name='Year')),
                ('tba', models.BooleanField(default=False, verbose_name='TBA Year')),
                ('credit', models.CharField(max_length=2000, verbose_name='Credit')),
                ('category', models.CharField(choices=[('Voice Credits', 'Voice Credits'), ('Music - Games', 'Music - Games'), ('Music - Miscellaneous', 'Music - Miscellaneous'), ('Streaming - Credits', 'Streaming - Credits')], max_length=30, verbose_name='Category')),
            ],
        ),
        migrations.CreateModel(
            name='FooterStat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.CharField(max_length=200, verbose_name='Value')),
                ('label', models.CharField(max_length=200, verbose_name='Label')),
                ('percent', models.IntegerField(verbose_name='Percent')),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('src', models.CharField(max_length=200, verbose_name='Source')),
                ('title', models.CharField(max_length=1000, verbose_name='Title')),
            ],
        ),
        migrations.CreateModel(
            name='Skills',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('game_development', models.TextField()),
                ('streaming', models.TextField()),
                ('voice_acting', models.TextField()),
            ],
        ),
    ]
