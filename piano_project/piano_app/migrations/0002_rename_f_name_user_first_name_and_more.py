# Generated by Django 4.1.1 on 2022-10-06 05:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('piano_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='f_name',
            new_name='first_name',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='l_name',
            new_name='last_name',
        ),
    ]
