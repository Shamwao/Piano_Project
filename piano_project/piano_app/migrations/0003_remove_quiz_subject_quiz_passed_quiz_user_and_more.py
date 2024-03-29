# Generated by Django 4.1.2 on 2022-10-09 23:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('piano_app', '0002_rename_f_name_user_first_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='quiz',
            name='subject',
        ),
        migrations.AddField(
            model_name='quiz',
            name='passed',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='quiz',
            name='user',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='best_score', to='piano_app.user'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='quiz',
            name='score',
            field=models.IntegerField(default=0),
        ),
    ]
