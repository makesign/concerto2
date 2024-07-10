{
  "de": {
    "actions": "Aktionen",
    "activerecord": {
      "attributes": {
        "concerto_config": {
          "allow_registration": "Benutzer dürfen sich registrieren",
          "allow_user_feed_creation": "Erstellen von Kanälen durch Benutzer erlauben",
          "allow_user_screen_creation": "Erstellen von Bildschirmen durch Benutzer erlauben",
          "analytics_enabled": "Google Analytics aktivieren",
          "analytics_property_id": "Google Web Property ID (API Key)",
          "autostart_delayed_job": "Delayed Job Processor automatisch starten",
          "confirmable": "Benutzer müssen ihr Konto bestätigen",
          "content_default_end_time": "Standard-Endzeit für Beiträge",
          "content_default_start_time": "Standard-Startzeit für Beiträge",
          "default_content_duration": "Standard-Anzeigedauer für Beiträge (Sekunden)",
          "default_content_run_time": "Standard-Sendedauer für Beiträge (Tage)",
          "default_upload_type": "Standard-Typ für Beiträge",
          "dynamic_refresh_time": "Aktualisierungsintervall für dynamischen Inhalt",
          "footer_html": "HTML für die Fusszeile",
          "http_proxy_settings": "HTTP Proxy Einstellungen",
          "keep_activity_log": "Aktivitätsprotokol führen",
          "mailer_from": "Mailer Von",
          "mailer_host": "Servername (FQDN)",
          "mailer_protocol": "Mailer Protokoll",
          "max_content_duration": "Maximale Anzeigedauer für Beiträge (Sekunden)",
          "min_content_duration": "Minimale Anzeigedauer für Beiträge (Sekunden)",
          "motd_html": "\"Nachricht des Tages\" HTML",
          "openssl_verify_mode_none": "Keine STMP SSL Zertifikat-Verifikation",
          "poll_interval": "Hardware player Abfrageintervall",
          "public_concerto": "Öffentlicher Zugriff",
          "rubygem_executable": "RubyGem Programdatei",
          "setup_complete": "Einrichtung abgeschlossen",
          "smtp_address": "STMP Server",
          "smtp_auth_type": "SMTP Authentifizierungstyp",
          "smtp_password": "STMP Passwort",
          "smtp_port": "SMTP Port",
          "smtp_username": "SMTP Benutzername",
          "start_date_offset": "Zeit zwischen der Einsendung eines Beitrags bis zu dessen Start",
          "system_time_zone": "Zeitzone System",
          "use_frontend_to_trigger_cron": "Benutze Frontend um Cron auszulösen"
        },
        "concerto_plugin": {
          "enable": "Gem aktivieren?",
          "gem_name": "Gem Name",
          "gem_version": "Gem Version",
          "source": "Quelle",
          "source_url": "Quell-URL"
        },
        "content": {
          "duration": "Anzeigedauer (Sekunden)",
          "end_time": "Endzeit",
          "name": "Name",
          "start_time": "Startzeit"
        },
        "field_config": {
          "key": "Schlüssel",
          "value": "Wert"
        },
        "group": {
          "name": "Name",
          "narrative": "Beschreibung der Gruppe",
          "new_leader": "Neuer Gruppenleiter"
        },
        "kind": {
          "actions": "Aktionen",
          "name": "Name"
        },
        "position": {
          "bottom": "Unten",
          "field": "Feld",
          "left": "Links",
          "right": "Rechts",
          "style": "Stil",
          "top": "Oben"
        },
        "screen": {
          "is_public": "Dieser Bildschirm ist öffentlich einsehbar",
          "location": "Standort",
          "name": "Name",
          "owner": "Besitzer",
          "owner_id": "Eigentum von",
          "template_id": "Bildschirmvorlage"
        },
        "submission": {
          "duration": "Dauer",
          "moderation_reason": "Grund"
        },
        "template": {
          "author": "Autor",
          "is_hidden": "Versteckt?",
          "name": "Name"
        },
        "user": {
          "actions": "Aktionen",
          "email": "E-Mail",
          "first_name": "Vorname",
          "is_admin": "Admin",
          "last_name": "Nachname",
          "locale": "Sprache",
          "password": "Passwort",
          "password_confirmation": "Passwort bestätigen",
          "receive_moderation_notifications": "Bei Änderungen benachrichten ",
          "time_zone": "Zeitzone"
        }
      },
      "models": {
        "client_time": {
          "one": "Ortszeit",
          "other": "Ortszeiten"
        },
        "concerto_plugin": {
          "one": "Komponente",
          "other": "Komponenten"
        },
        "content": {
          "one": "Beitrag",
          "other": "Beiträge"
        },
        "feed": {
          "one": "Kanal",
          "other": "Kanäle"
        },
        "field_config": {
          "one": "Konfigurationsparameter",
          "other": "Konfigurationsparameter"
        },
        "graphic": {
          "one": "Einzelbild",
          "other": "Einzelbilder"
        },
        "group": {
          "one": "Gruppe",
          "other": "Gruppen"
        },
        "html_text": {
          "one": "HTML-Text",
          "other": "HTML-Texte"
        },
        "kind": {
          "one": "Art",
          "other": "Arten"
        },
        "position": {
          "one": "Position",
          "other": "Positionen"
        },
        "screen": {
          "one": "Bildschirm",
          "other": "Bildschirme"
        },
        "submission": {
          "one": "Einsendung",
          "other": "Einsendungen"
        },
        "subscription": {
          "one": "Abonnement",
          "other": "Abonnemente"
        },
        "template": {
          "one": "Bildschirmvorlage",
          "other": "Bildschirmvorlagen"
        },
        "ticker": {
          "one": "Text",
          "other": "Texte"
        },
        "user": {
          "one": "Benutzer",
          "other": "Benutzer"
        }
      }
    },
    "activities": {
      "show": {
        "latest_activity": "Letzte Aktivität"
      }
    },
    "activity_mailer": {
      "submission_update": {
        "approved": "genehmigt",
        "content_schedule": "Der Beitrag wird planmässig vom %{start} bis %{end} angezeigt. Die Anzeigedauer beträgt %{duration} Sekunden.",
        "denied": "Enfernt",
        "feed": "Kanal",
        "for_the": "für den",
        "moderator": "Moderator",
        "moderator_text": "Moderator %{moderator} hat den Beitrag %{content_name} für den %{feed} Kanal %{status}",
        "reason_rejected": "Ablehnungsgrund: %{reason}",
        "your_concerto_submission": "Ihr Beitrag %{content_name} wurde %{status}"
      }
    },
    "add": "Hinzufügen",
    "add_model": "%{model} hinzufügen",
    "all_model": "Alle %{model}",
    "approve": "Annehmen",
    "approved": "Angenommen",
    "are_you_sure": "Sind Sie sicher?",
    "are_you_sure_delete_model_key": "%{model} \"%{key}\" wirklich löschen?",
    "are_you_sure_demote_user": "\"%{user}\" wirklich zurückstufen?",
    "are_you_sure_leave_group": "\"%{group}\" wirklich verlassen?",
    "are_you_sure_remove_model_key": "%{model} \"%{key}\" wirklich entfernen?",
    "are_you_sure_remove_user_group": "\"%{user}\" wirklich aus \"%{group}\" entfernen?",
    "asset_precomp_failed": "Asset precompilation fehlgeschlagen. Stellen Sie sicher dass das Kommando rake assets:precompile funktioniert",
    "back": "Zurück",
    "bad_request": "Ungültige Anfrage.",
    "bundle_error": "Fehler beim Verarbeiten des Programmpakets.",
    "cancel": "Abbrechen",
    "cannot_delete_last_admin": "Letzter admin-Benutzer kann nicht gelöscht werden.",
    "cannot_delete_template": "Bildschirmvorlage kann nicht gelöscht werden, noch verbunden mit %{screens}",
    "cant_be_blank": "darf nicht leer sein",
    "cant_be_this_content": "ungültiger Beitragstyp",
    "cant_be_this_feed": "kann nicht dieser Kanal sein",
    "cant_write_restart_txt": "Das Neustarten des Webservers ist gescheitert. Manueller Neustart ist erforderlich.",
    "concerto": "Concerto",
    "concerto_config": {
      "config_check": {
        "configuration_check": "Konfigurationstest",
        "file_permissions": "notwendige Dateirechte",
        "performance": "Leistung",
        "security": "Sicherheit",
        "software_prerequisites": "Softwarevoraussetzungen"
      },
      "show": {
        "check_configuration": "Konfiguartion prüfen",
        "edit_settings": "Allgemeine Einstellungen anpassen",
        "global_settings": "Allgemeine Einstellungen",
        "restart_confirm": "Das Neustarten des Webservers dauert 10 bis 20 Sekunden. Neustart?",
        "restart_webserver": "Webserver neustarten",
        "save_settings": "Einstellungen speichern"
      }
    },
    "concerto_plugins": {
      "edit": {
        "prohibited_plugin_save": "unzulässige Komponentenspeicherung"
      },
      "index": {
        "disabled": "deaktiviert",
        "disabled_msg": "Die Komponente ist aktuell deaktiviert.",
        "enabled": "aktiviert",
        "enabled_msg": "Die Komponente ist aktuell deaktiviert.",
        "gem_description": "Beschreibung",
        "status": "Status"
      },
      "new": {
        "install_plugin": "Komponente installieren",
        "path_instructions": "Pfad zu Verzeichnis oder Speicherort für Komponente erforderlich. Verzeichnisse unter Mac OS X in /var/www/ erfordern Präfix /private.",
        "source_url": "Quell-URL"
      },
      "show": {
        "enabled": "Aktiviert:",
        "gem_name": "Gem Name:",
        "gem_version": "Gem Version:",
        "installed": "Installiert:",
        "installed_no": "Nein",
        "installed_yes": "Ja",
        "locked": "(Gesperrt)",
        "source": "Quelle:",
        "source_url": "Quell-URL:",
        "unknown": "Unbekannt",
        "upgrade": "Upgrade",
        "upgrade_available": "(Upgrade für %{version} verfügbar)",
        "visit_plugin_website": "Besuchen Sie die Website der Komponente"
      },
      "sources": {
        "git": "Git-Ablage",
        "path": "Pfad Dateisystem",
        "rubygems": "RubyGems"
      }
    },
    "content_approved": "Beitrag genehmigt.",
    "content_created": "Beitrag erstellt.",
    "content_created_no_feeds": "Der Beitrag wurde erfolgreich erstellt. Weil kein Kanal ausgewählt wurde, bleibt der Inhalt in der Zwischenablage.",
    "content_deleted": "Beitrag gelöscht.",
    "content_denied": "Beitrag entfernt.",
    "content_expired_mod": "Der Beitrag ist verfallen, bevor er bearbeitet werden konnte.",
    "content_failed_approve": "Der Content konnte nicht genehmigt werden.",
    "content_failed_deny": "Der Beitrag konnte nicht entfernt werden.",
    "content_failed_moderation": "Der Beitrag konnte nicht bearbeitet werden",
    "content_moderated": "Beitrag bearbeitet.",
    "content_not_found": "Beitrag nicht gefunden.",
    "content_refreshed": "Beitrag aktualisiert.",
    "content_updated": "Beitrag wurde erfolgreich aktualisiert",
    "contents": {
      "dynamic_content_tools": {
        "force_update": "Aktualisierung erzwingen",
        "owner_tools": "Besitzer-Tools",
        "purge_children": "Elemente löschen"
      },
      "edit": {
        "edit_content": "%{type}-Beitrag bearbeiten"
      },
      "form": {
        "preview": "Vorschau",
        "provide_details": "Basiseigenschaften angeben",
        "select_content_type": "Beitragstyp zum Hinzufügen auswählen",
        "select_feed": "Wählen Sie einen Kanal"
      },
      "form_bottom": {
        "submit_content": "BEITRAG SENDEN"
      },
      "form_elements": {
        "dates": {
          "finish_displaying": "Senden bis",
          "set_specific_times": "Uhrzeit einstellen",
          "start_displaying": "Senden von"
        },
        "duration": {
          "change": "Ändern",
          "second": {
            "one": "%{count} Sekunde",
            "other": "%{count} Sekunden"
          },
          "show_on_screen": "Anzeigen"
        },
        "feeds": {
          "filter_feeds": "Kanäle filtern",
          "no_feeds": "Es wurde noch kein Kanal für diesen Beitrag ausgewählt.",
          "select_a_feed": "Wählen Sie einen Kanal",
          "type_to_filter": "Filtern Sie hier"
        },
        "selected_feed_display": {
          "appears_on_screens": "Wird auf %{screens_count} Bildschirmen angezeigt"
        }
      },
      "form_top": {
        "data": "Daten"
      },
      "graphic": {
        "form_top": {
          "accepted_filetypes": "Zulässige Dateitypen",
          "specify_file": "Datei wählen",
          "upload_graphic": "Einzelbild hochladen"
        },
        "js": {
          "preview": "Vorschau..."
        }
      },
      "index": {
        "active": "Entfernte und geplante Beiträge verstecken?",
        "browse_content": "Beiträge durchsuchen",
        "browse_content_by_feed": "Beiträge auf Kanälen durchsuchen",
        "browse_content_by_screen": "Beitrag auf bestimmtem Bildschirm finden",
        "content_search": "Beitragssuche",
        "contents_search": "Beitrag",
        "feed": "Kanal",
        "filtered_content": "Abgefragter Beitrag",
        "screen": "Bildschirm",
        "search": "Suchen",
        "type": "Beitragstyp",
        "user": "Benutzer"
      },
      "new": {
        "add_content": "Beitrag vom Typ \"%{type}\" hinzufügen",
        "content": "Beitrag",
        "content_type": "Beitragstypen zum Hinzufügen",
        "design_graphic": "Einzelbild bearbeiten",
        "select_type": "Wählen Sie einen Beitragstyp"
      },
      "provide_details": "Einstellungen vornehmen",
      "show": {
        "display_from": "Anzeigen von",
        "display_until": "Anzeigen bis",
        "feeds_moderation_status": "Beitragsstatus",
        "not_submitted": "Der Beitrag wurde bei keinem Kanal eingesendet.",
        "submitted_by": "Eingesendet",
        "the_dawn_of_time": "Anbeginn der Zeit.",
        "the_end_of_time": "Ende der Zeit."
      },
      "show_details": {
        "content_resubmission": "Beitrag neu einreichen",
        "display_from": "Anzeigen von",
        "display_until": "Anzeigen bis",
        "duration": "Dauer",
        "feeds_moderation_status": "Beitragsstatus",
        "not_submitted": "Dieser Beitrag wurde keinem Kanal zugewiesen",
        "seconds": "Sekunden",
        "submitted_by": "Eingesendet von",
        "the_dawn_of_time": "Anbeginn der Zeit.",
        "the_end_of_time": "Ende der Zeit."
      },
      "submit_to_feeds": "Kanal wählen",
      "table": {
        "description": "Beschreibung",
        "link": "Link",
        "submitted": "Eingesendet",
        "title": "Titel",
        "updated": "Aktuallisiert"
      },
      "ticker": {
        "form_top": {
          "allowed_html": [
            "auf Markdown kann bei http://wikipedia.org/wiki/Markdown gefunden werden."
          ],
          "characters": "Zeichen",
          "display_format": "Anzeigeformat",
          "display_format_tip": "Das Ticker Anzeigeformat wird verwendet um einen ",
          "markdown_allowed": "Markdown oder HTML-Eingaben sind möglich.",
          "preview": "Vorschau",
          "ticker_text": "Ticker Text",
          "type_your_message": "Text eingeben"
        }
      }
    },
    "create_model": "%{model} erstellen",
    "dashboard": {
      "admin_stats": {
        "backup": "Backup",
        "cant_determine_latest_version": "Konnte die aktuellste Version nicht ausfindig machen.",
        "concerto_version": "Concerto Version:",
        "delayed_job_status": "Background Job Engine:",
        "new_version": "Eine neue Version (%{version}) ist verfügbar.",
        "restart_webserver": "Webserver neustarten",
        "running": "In Betrieb",
        "start_stop": "Kurzanleitung zum Starten/Stoppen",
        "stopped": "Gestoppt",
        "system_info": "System Information",
        "user_stats": "Benutzerstatistik:"
      },
      "browse": {
        "submissions_to_moderate": {
          "one": "Sie haben %{count} Beitrag zu moderieren",
          "other": "Sie haben %{count} Beiträge zu moderieren"
        }
      },
      "global_preferences": "Globale Einstellungen",
      "latest_activity": {
        "more": "Mehr"
      },
      "list_activities": {
        "latest_activity": "Letzte Aktivität"
      },
      "network": {
        "groups": "Gruppen",
        "no_membership": "Sie sind kein Mitglied einer Gruppe",
        "screens": "Bildschirme",
        "your_network": "Ihr Netzwerk"
      },
      "vitals": {
        "active": "aktiv",
        "active_content": {
          "one": "aktiver %{content}",
          "other": "aktive %{content}"
        },
        "network_vitals": "Netzwerk Übersicht",
        "offline": "offline"
      }
    },
    "date": {
      "abbr_day_names": [
        "So",
        "Mo",
        "Di",
        "Mi",
        "Do",
        "Fr",
        "Sa"
      ],
      "abbr_month_names": [
        null,
        "Jan",
        "Feb",
        "Mär",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez"
      ],
      "day_names": [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag"
      ],
      "formats": {
        "default": "%d.%m.%Y",
        "long": "%e. %B %Y",
        "short": "%e. %b"
      },
      "month_names": [
        null,
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
      ],
      "order": [
        "day",
        "month",
        "year"
      ]
    },
    "datetime": {
      "distance_in_words": {
        "about_x_hours": {
          "one": "etwa eine Stunde",
          "other": "etwa %{count} Stunden"
        },
        "about_x_months": {
          "one": "etwa ein Monat",
          "other": "etwa %{count} Monate"
        },
        "about_x_years": {
          "one": "etwa ein Jahr",
          "other": "etwa %{count} Jahre"
        },
        "almost_x_years": {
          "one": "fast ein Jahr",
          "other": "fast %{count} Jahre"
        },
        "half_a_minute": "eine halbe Minute",
        "less_than_x_minutes": {
          "one": "weniger als eine Minute",
          "other": "weniger als %{count} Minuten"
        },
        "less_than_x_seconds": {
          "one": "weniger als eine Sekunde",
          "other": "weniger als %{count} Sekunden"
        },
        "over_x_years": {
          "one": "mehr als ein Jahr",
          "other": "mehr als %{count} Jahre"
        },
        "x_days": {
          "one": "ein Tag",
          "other": "%{count} Tage"
        },
        "x_minutes": {
          "one": "eine Minute",
          "other": "%{count} Minuten"
        },
        "x_months": {
          "one": "ein Monat",
          "other": "%{count} Monate"
        },
        "x_seconds": {
          "one": "eine Sekunde",
          "other": "%{count} Sekunden"
        }
      },
      "prompts": {
        "day": "Tag",
        "hour": "Stunden",
        "minute": "Minuten",
        "month": "Monat",
        "second": "Sekunden",
        "year": "Jahr"
      }
    },
    "deny": "Ablehnen",
    "destroy": "Löschen",
    "destroy_model": "%{model} löschen",
    "devise": {
      "confirmations": {
        "confirmed": "Vielen Dank für Ihre Registrierung. Bitte melden Sie sich jetzt an.",
        "confirmed_and_signed_in": "Vielen Dank für Ihre Registrierung. Sie sind jetzt angemeldet.",
        "new": {
          "header": "Anleitung zur Bestätigung Ihres Accounts erneut senden",
          "submit": "Anleitung zur Bestätigung Ihres Accountserneut senden"
        },
        "send_instructions": "Sie erhalten in wenigen Minuten eine E-Mail, mit der Sie Ihre Registrierung bestätigen können.",
        "send_paranoid_instructions": "Falls Ihre E-Mail-Adresse in unserer Datenbank existiert erhalten Sie in wenigen Minuten eine E-Mail mit der Sie Ihre Registrierung bestätigen können."
      },
      "failure": {
        "already_authenticated": "Sie sind bereits angemeldet.",
        "inactive": "Ihr Account ist nicht aktiv.",
        "invalid": "Ungültige Anmeldedaten.",
        "invalid_token": "Der Anmelde-Token ist ungültig.",
        "locked": "Ihr Account ist gesperrt.",
        "not_found_in_database": "E-Mail-Adresse oder Passwort ungültig.",
        "timeout": "Ihre Sitzung ist abgelaufen, bitte melden Sie sich erneut an.",
        "unauthenticated": "Sie müssen sich anmelden oder registrieren, bevor Sie fortfahren können.",
        "unconfirmed": "Sie müssen Ihren Account bestätigen, bevor Sie fortfahren können."
      },
      "mailer": {
        "confirmation_instructions": {
          "confirm_account_below": "Bestätigen Sie Ihr Konto mit einem Klick auf untenstehenden Link:",
          "confirm_my_account": "Mein Konto bestätigen",
          "subject": "Anleitung zur Bestätigung Ihres Accounts",
          "welcome": "Willkommen %{user}!"
        },
        "reset_password_instructions": {
          "change_my_password": "Passwort ändern",
          "hello": "Hallo %{user}!",
          "ignore_if_not_requested": "Falls Sie dies nicht verlangt haben, ignorieren Sie bitte diese Email.",
          "password_wont_change": "Ihr Passwort wird nicht geändert bis Sie den obenstehenden Link öffnen und ein neues Passwort gesetzten.",
          "request_link_to_change_password": "Ein Link zur Änderungen Ihres Passworts wurde angefordert. Wenn Sie dies zu tun wünschen, dann klicken Sie auf untenstehenden Link.",
          "subject": "Anleitung um Ihr Passwort zurückzusetzen"
        },
        "unlock_instructions": {
          "account_locked": "Das Login ist mehrfach gescheitert. Ihr Konto wurde deshalb gesperrt.",
          "click_to_unlock": "Klicken Sie auf untenstehenden Link, um Ihr Konto zu entsperren:",
          "hello": "Hallo %{user}!",
          "subject": "Anleitung um Ihren Account freizuschalten",
          "unlock_my_account": "Konto entsperren"
        }
      },
      "omniauth_callbacks": {
        "failure": "Sie konnten nicht mit Ihrem %{kind}-Account angemeldet werden, weil '%{reason}'.",
        "success": "Sie haben sich erfolgreich mit Ihrem %{kind}-Account angemeldet."
      },
      "passwords": {
        "edit": {
          "header": "Passwort ändern",
          "new_password": "Neues Passwort",
          "repeat_password": "Passwort wiederholen",
          "submit": "Passwort ändern"
        },
        "new": {
          "header": "Passwort vergessen?",
          "submit": "Anweisungen zum Zurücksetzen senden"
        },
        "no_token": "Sie können diese Seite nur von dem Link aus einer E-Mail zum Passwort-Zurücksetzen aufrufen. Wenn Sie einen solchen Link aufgerufen haben, stellen Sie bitte sicher, dass Sie die vollständige Adresse aufrufen.",
        "send_instructions": "Sie erhalten in wenigen Minuten eine E-Mail mit der Anleitung, wie Sie Ihr Passwort zurücksetzen können.",
        "send_paranoid_instructions": "Falls Ihre E-Mail-Adresse in unserer Datenbank existiert erhalten Sie in wenigen Minuten eine E-Mail mit der Anleitung, wie Sie Ihr Passwort zurücksetzen können.",
        "updated": "Ihr Passwort wurde geändert. Sie sind jetzt angemeldet.",
        "updated_not_active": "Ihr Passwort wurde geändert."
      },
      "registrations": {
        "destroyed": "Ihr Account wurde gelöscht.",
        "edit": {
          "change_password_for": "Passwort für %{username} ändern",
          "confirm_password": "Passwort bestätigen",
          "current_password": "Aktuelles Passwort",
          "new_password": "Neues Passwort"
        },
        "new": {
          "confirm_password": "Passwort bestätigen",
          "header": "Konto registrieren",
          "name": "Name",
          "submit": "Konto registrieren"
        },
        "signed_up": "Sie haben sich erfolgreich registriert.",
        "signed_up_but_inactive": "Sie haben sich erfolgreich registriert. Wir konnten Sie noch nicht anmelden, da Ihr Account inaktiv ist.",
        "signed_up_but_locked": "Sie haben sich erfolgreich registriert. Wir konnten Sie noch nicht anmelden, da Ihr Account gesperrt ist.",
        "signed_up_but_unconfirmed": "Sie haben sich erfolgreich registriert. Wir konnten Sie noch nicht anmelden, da Ihr Account noch nicht bestätigt ist. Sie erhalten in Kürze eine E-Mail mit der Anleitung, wie Sie Ihren Account freischalten können.",
        "update_needs_confirmation": "Ihre Daten wurden aktualisiert, aber Sie müssen Ihre neue E-Mail-Adresse bestätigen. Sie erhalten in wenigen Minuten eine E-Mail, mit der Sie die Änderung Ihrer E-Mail-Adresse abschliessen können.",
        "updated": "Ihre Daten wurden aktualisiert."
      },
      "sessions": {
        "form": {
          "remember_me": "Kontoinformationen speichern",
          "sign_in": "Anmelden"
        },
        "new": {
          "remember_me": "Kontoinformationen speichern",
          "sign_in": "Anmelden"
        },
        "signed_in": "Erfolgreich angemeldet.",
        "signed_out": "Erfolgreich abgemeldet."
      },
      "shared": {
        "links": {
          "forgot_password": "Passwort vergessen?",
          "no_confirmation_instructions": "Anweisungen zur Bestätigung nicht erhalten?",
          "no_unlock_instructions": "Anweisungen zum Entsperren nicht erhalten?",
          "register_account": "Konto erstellen",
          "sign_in": "Anmelden",
          "sign_in_with": "Anmelden mit %{provider}"
        }
      },
      "unlocks": {
        "new": {
          "header": "Anweisungen zum Entsperren erneut senden",
          "submit": "Anweisungen zum Entsperren erneut senden"
        },
        "send_instructions": "Sie erhalten in wenigen Minuten eine E-Mail mit der Anleitung, wie Sie Ihren Account entsperren können.",
        "send_paranoid_instructions": "Falls Ihre E-Mail-Adresse in unserer Datenbank existiert erhalten Sie in wenigen Minuten eine E-Mail mit der Anleitung, wie Sie Ihren Account entsperren können.",
        "unlocked": "Ihr Account wurde entsperrt. Sie sind jetzt angemeldet."
      }
    },
    "edit": "Bearbeiten",
    "edit_model": "%{model} bearbeiten",
    "elements": {
      "owner_select": {
        "no_users_found": "Keine Benutzer gefunden.",
        "select_user": "Wählen Sie einen Benutzer...",
        "select_user_title": "Wählen Sie einen Benutzer",
        "type_to_filter": "Filtern Sie hier..."
      },
      "topmenu_contents": {
        "accounts": "Konten",
        "admin": "Admin",
        "backup": "Sicherung",
        "browse": "Suchen",
        "configuration": "Konfiguration",
        "content": "Beiträge",
        "dashboard_tooltip": "Das Dashboard anseehen",
        "groups": "Gruppen",
        "leader": "Sie sind Leiter einer order mehrerer Gruppen ",
        "log_out": "Ausloggen",
        "moderate": "Moderieren",
        "network": "Netzwerk",
        "no_account": "Kein Account?",
        "now": "Sie sich jetzt!",
        "plugins": "Plugins",
        "restart_webserver": "Webserver neustarten",
        "return_home_msg": "heimkehren",
        "screens": "Bildschirme",
        "settings": "Einstellungen",
        "sign_in": "Einloggen",
        "sign_up": "Registieren",
        "signin_login_spiel": "um Beiträge hochladen und verwalten zu können.",
        "submissions_to_moderate": {
          "one": "Sie haben %{count} Beiträg zu moderieren",
          "other": "Sie haben %{count} Beiträge zu moderieren"
        },
        "system_admin": "Sie sind ein systemweiter Administrator",
        "templates": "Bildschirmvorlagen",
        "users": "Benutzer",
        "users_and_groups": "Benutzergruppen"
      }
    },
    "error_refreshing": "Fehler beim aktualisieren.",
    "errors": {
      "error_404": {
        "abort": "Abbrechen!",
        "content_not_found": "Wir fürchten dieser Beitrag existiert nicht mehr.",
        "error_message": "Der Beitrag den Sie suchen konnte nicht gefunden werden. Manchmal ist ein strategischer Rückzug die beste Option."
      },
      "error_generic": {
        "abort": "Abbrechen!",
        "error_message": "Etwas ist schief gelaufen. Seien sie versichert, dass Ihnen keine Schuld zukommt. ",
        "reset_message": "Manchmal ist ein strategischer Rückzug die beste Option."
      },
      "format": "%{attribute} %{message}",
      "messages": {
        "accepted": "muss akzeptiert werden",
        "already_confirmed": "wurde bereits bestätigt",
        "blank": "muss ausgefüllt werden",
        "confirmation": "stimmt nicht mit %{attribute} überein",
        "confirmation_period_expired": "muss innerhalb %{period} bestätigt werden, bitte fordern Sie einen neuen Link an",
        "empty": "muss ausgefüllt werden",
        "equal_to": "muss genau %{count} sein",
        "even": "muss gerade sein",
        "exclusion": "ist nicht verfügbar",
        "expired": "ist abgelaufen, bitte neu anfordern",
        "greater_than": "muss größer als %{count} sein",
        "greater_than_or_equal_to": "muss größer oder gleich %{count} sein",
        "inclusion": "ist kein gültiger Wert",
        "invalid": "ist nicht gültig",
        "less_than": "muss kleiner als %{count} sein",
        "less_than_or_equal_to": "muss kleiner oder gleich %{count} sein",
        "not_a_number": "ist keine Zahl",
        "not_an_integer": "muss ganzzahlig sein",
        "not_found": "nicht gefunden",
        "not_locked": "ist nicht gesperrt",
        "not_saved": {
          "one": "Konnte %{resource} nicht speichern: ein Fehler.",
          "other": "Konnte %{resource} nicht speichern: %{count} Fehler."
        },
        "odd": "muss ungerade sein",
        "other_than": "darf nicht gleich %{count} sein",
        "present": "darf nicht ausgefüllt werden",
        "record_invalid": "Gültigkeitsprüfung ist fehlgeschlagen: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Datensatz kann nicht gelöscht werden, da abhängige %{record} existieren.",
          "one": "Datensatz kann nicht gelöscht werden, da ein abhängiger %{record}-Datensatz existiert."
        },
        "taken": "ist bereits vergeben",
        "too_long": "ist zu lang (mehr als %{count} Zeichen)",
        "too_short": "ist zu kurz (weniger als %{count} Zeichen)",
        "wrong_length": "hat die falsche Länge (muss genau %{count} Zeichen haben)"
      },
      "template": {
        "body": "Bitte überprüfen Sie die folgenden Felder:",
        "header": {
          "one": "Konnte %{model} nicht speichern: ein Fehler.",
          "other": "Konnte %{model} nicht speichern: %{count} Fehler."
        }
      }
    },
    "failed": "fehlgeschlagen",
    "feed_created": "Kanal wurde erfolgreich erstellt.",
    "feed_updated": "Kanal wurde erfolgreich aktualisiert.",
    "feeds": {
      "active": "Aktiv",
      "approved": "Genehmigt",
      "browse_body": {
        "no_content_heading": "Wir fürchten dieser Beitrag existiert nicht mehr.",
        "no_content_message": "In diesem Netzwerk scheint nichts für Sie sichtbar zu sein. Sie sollten",
        "not_submittable": "Submissions not Allowed",
        "not_viewable": "Not Viewable",
        "sign_in": "sich einloggen",
        "sign_up": "sich registieren"
      },
      "browse_header": {
        "browse_content": "Kanal wählen"
      },
      "denied": "Entfernt",
      "expired": "Abgelaufen",
      "form": {
        "allowed_types": "Erlaubte Beitragstypen",
        "other_options": "Andere Optionen",
        "prohibited_feed_save": "hat verhindert dass dieser Kanal gespeichert werden konnte:",
        "provide_details": "Einstellungen vornehmen",
        "settings": "Einstellungen"
      },
      "future": "Geplant",
      "moderate": {
        "contents_pending_moderation": "Beiträge mit ausstehender Moderation",
        "no_pending_content": "Alles in Ordnung! Kein Kanal den Sie moderieren hat ausstehende Beiträge.",
        "nothing_to_moderate": "Nichts zu moderieren",
        "with_pending_content": "mit ausstehenden Beiträgen"
      },
      "no_availible_feeds": "Es existiert kein Kanal im System bei dem Sie Beiträge einsenden können. Bitte kontaktieren Sie Ihren System Administrator für nähere Informationen.",
      "orphaned": "Verwaist",
      "pending": "Ausstehend"
    },
    "field_configs": {
      "index": {
        "field": "Feld",
        "field_custom_configurations": "Benutzerdefinierte Feld-Konfigurationen",
        "manage_model_for_field": "%{model} für das %{name} Feld verwalten",
        "no_configuration_yet": "Dieses Feld hat noch keine Konfiguration.",
        "save_changes_to_model": "Änderungen für das %{model} speichern"
      },
      "show": {
        "back": "Zurück",
        "edit": "Bearbeiten"
      }
    },
    "field_created": "Feld wurde erfolgreich erstellt.",
    "field_updated": "Feld wurde erfolgreich aktualisiert.",
    "file_is_required": "Datei benötigt",
    "file_type_unsupported": "Datei ist vom Typ %{type} der nicht unterstützt wird.",
    "frontend": {
      "screens": {
        "sign_in": {
          "coming_soon": "Demnächst hier: Ihr neuer Bildschirm",
          "configure": "Um Ihren Bildschirm zu konfigurieren, müssen Sie folgende Schritte befolgen:",
          "happy_advertising": "Viel Spass beim Werben",
          "step_one": "Schritt 1",
          "step_one_message": "Auf Ihrem PC oder Mobilgerät, loggen Sie sich im Administration-Panel ein. dann öffnen Sie die Bildschirm-Seite",
          "step_three": "Schritt 3",
          "step_three_details": "Sie können Beiträge auf diesem Bildschirm anzeigen, indem Sie die Abonnements für jedes Feld erstellen.",
          "step_three_header": "Zum Schluss betrachten Sie wieder diesen Bildschirm. Nach einer Weile sollte die gewählte Bildschirmvorlage erscheinen.",
          "step_two": "Schritt 2",
          "step_two_details": "Der Bildschirm sollte nicht öffentlich sein. Verwenden Sie den oben aufgeführten Bildschirmcode als Autorisierungscode. Sollte diese Gerät neu konfiguriert werden oder einen bestehenden Bildschirm ersetzen, bearbeiten Sie die Einstellungen dieses Bildschirms und stellen Sie sicher, dass er nicht öffentlich ist. Geben Sie dann den Autorisierungscode ein.",
          "step_two_header": "Wenn dieser Bildschirm neu ist, wählen Sie \"Neuer Bildschirm\". Danach nehmen Sie alle nötigen Einstellungen vor."
        }
      }
    },
    "gem_not_found": "ist kein gültiges rugygem",
    "gems_frozen_warning": "Bundler wurde mit einer \"frozen gem\" Konfiguration gestartet— vermutlich durch ein deployment Tool welches die --deployment option für Bundler verwendet. In diesen Setup können Plugins nicht automatisch hinzugefügt, installiert, aktualisiert oder entfernt werden.",
    "gemspec_not_found": "Gemspec nicht gefunden",
    "group_created": "Gruppe wurde erfolgreich erstellt.",
    "group_not_deletable": "Eine Gruppe, die noch Bildschirme oder Kanäle verwaltet, kann nicht gelöscht werden.",
    "group_updated": "Gruppe wurde erfolgreich aktualisiert.",
    "groups": {
      "edit": {
        "change_group_memberships": "Gruppen Mitgliedschaften ändern"
      },
      "form": {
        "initial_leader": "Gruppenleiter",
        "provide_details": "Einstellungen vornehmen"
      },
      "index": {
        "leader": "Dieser Benutzer ist Leider dieser Gruppen."
      },
      "manage_members": {
        "add_member": "Mitglied hinzufügen",
        "add_users_to_group": "Benutzer der Gruppe hinzufügen",
        "approve_requests": "Zulassungen bestätigen",
        "demote_to_regular": "Als normaler Benutzer zurückstufen",
        "feed_permission": {
          "name": "Kanalberechtigungen",
          "tooltip": "Mögliche Änderungen bei Bildschirmen dieser Gruppe: Keine Änderungen, nur Abonnements bearbeiten oder alles bearbeiten (Kanal bearbeiten, Beiträge moderieren)"
        },
        "leader": "Leiter",
        "manage_members": "Mitglieder verwalten",
        "manage_model": "%{model} verwalten",
        "member": "Mitglied",
        "name": "Name",
        "no_pending_approvals": "Keine ausstehenden Zulassungen",
        "no_regular_members": "Diese Gruppe hat aktuell keine normale Mitglieder.",
        "permissions": {
          "all": "Alle",
          "none": "Keine",
          "submissions": "Einsendungen",
          "subscriptions": "Abonnemente"
        },
        "promote_to_leader": "Zum Leiter befördern",
        "remove_from_group": "Von der Gruppe entfernen",
        "request_made_at": "Anfrage gestellt am",
        "screen_permission": {
          "name": "Bildschirmberechtigungen",
          "tooltip": "Mögliche Änderungen bei Bildschirmen diese Gruppe: Keine Änderungen, nur Abonnemente bearbeiten oder alles bearbeiten (Bildschirm bearbeiten, Bildschirmvorlage ändern, Abonnements verwalten)."
        },
        "update_permissions": "Berechtigungen aktualisieren "
      },
      "show_body": {
        "edit_group": "Gruppe bearbeiten",
        "feed_header": {
          "one": "Moderiert einen Kanal",
          "other": "Moderiert %{count} Kanäle"
        },
        "group_description": "Beschreibung der Gruppe",
        "group_has_no_leaders": "Diese Gruppe hat aktuell keinen Leiter. Sie sollten ein Mitglied in der Tabelle oben zum Leiter befördern.",
        "group_leaders": "Gruppenleiter",
        "join_group": "Gruppe beitreten",
        "leader": "Leiter",
        "leave_group": "Gruppe verlassen",
        "member": "Mitglied",
        "member_header": {
          "one": "Hat ein Mitglied",
          "other": "Hat %{count} Mitglieder"
        },
        "no_pending_approvals": "Keine ausstehenden Zulassungen!",
        "not_in_group": "Sie sind aktuell nicht Mitglied dieser Gruppe.",
        "previously_denied_members": "Zuvor abgelehnte Mitglieder",
        "promote_to_leader": "Zum Leiter befördern",
        "regular_members": "Normale Mitglieder",
        "remove_from_group": "Der Gruppe entfernen",
        "request_made_at": "Anfrage gestellt am",
        "screen_header": {
          "one": "Verwaltet einen Bildschirm",
          "other": "Verwaltet %{count} Bildschirme"
        },
        "your_membership_role": "Sie sind aktuell ein %{level}%{what} dieser Gruppe."
      },
      "show_header": {
        "group_cannot_be_deleted": "Gruppe kann nicht gelöscht werden",
        "manage_members": "Mitglieder verwalten"
      }
    },
    "helpers": {
      "label": {
        "feed": {
          "description": "Beschreibung",
          "group": "Gruppe",
          "is_submittable": "Einsendungen möglich",
          "is_viewable": "Öffentlich einsehbar",
          "name": "Name",
          "parent": "Übergeordneter Kanal"
        },
        "graphic": {
          "name": "Name",
          "submit": "Einsenden"
        },
        "template": {
          "author": "Autor",
          "is_hidden": "Diese Bildschirmvorlage in der Listenansicht ausblenden",
          "media": "Hintergrundbild / CSS",
          "name": "Name",
          "owner": "Besitzer"
        },
        "user": {
          "email": "E-Mail",
          "first_name": "Nam",
          "locale": "Sprache",
          "password": "Passwort",
          "password_confirmation": "Passwort bestätigen",
          "receive_moderation_notifications": "Bei Änderungen benachrichtigen",
          "time_zone": "Zeitzone"
        }
      },
      "page_entries_info": {
        "more_pages": {
          "display_entries": "Zeige %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> von insgesamt <b>%{total}</b>"
        },
        "one_page": {
          "display_entries": {
            "one": "Zeige <b>%{count}</b> %{entry_name}",
            "other": "Zeige <b>alle %{count}</b> %{entry_name}",
            "zero": "Kein %{entry_name} gefunden"
          }
        }
      },
      "select": {
        "prompt": "Bitte wählen"
      },
      "submit": {
        "create": "%{model} erstellen",
        "submit": "%{model} speichern",
        "update": "%{model} aktualisieren"
      }
    },
    "import_model": "%{model} importieren",
    "join": "Beitreten",
    "js": {
      "confirmbox": {
        "cancel": "Abbrechen",
        "ok": "OK",
        "title": "Concerto"
      },
      "duration": {
        "second": {
          "one": "%{count}s",
          "other": "%{count}s"
        }
      }
    },
    "kind_created": "Beitragsart wurde erfolgreich erstellt.",
    "kind_updated": "Beitragsart wurde erfolgreich aktuallisiert.",
    "layouts": {
      "errors": {
        "prohibited_save": {
          "concerto_plugin": {
            "one": "1 Fehler verhinderte das Speichern dieses Plugins:",
            "other": "%{count} Fehler verhinderten das Speichern dieses Plugins:"
          },
          "feed": {
            "one": "1 Fehler verhinderte das Speichern dieses Kanals:",
            "other": "%{count} Fehler verhinderten das Speichern dieses Kanals:"
          },
          "field_config": {
            "one": "1 Fehler verhinderte das Speichern dieser Feldeinstellung:",
            "other": "%{count} Fehler verhinderten das Speichern dieser Feldeinstellung:"
          },
          "generic": {
            "one": "1 Fehler verhinderte das Speichern von \"%{model}\":",
            "other": "%{count} Fehler verhinderten das Speichern vom \"%{model}\":"
          },
          "graphic": {
            "one": "1 Fehler verhinderte das Speichern dieses Einzelbildes:",
            "other": "%{count} Fehler verhinderten das Speichern dieses Einzelbildes:"
          },
          "group": {
            "one": "1 Fehler verhinderte das Speichern dieser Gruppe:",
            "other": "%{count} Fehler verhinderten das Speichern dieser Gruppe:"
          },
          "kind": {
            "one": "1 Fehler verhinderte das Speichern dieser Art:",
            "other": "%{count} Fehler verhinderten das Speichern dieser Art:"
          },
          "page": {
            "one": "1 Fehler verhinderte das Speichern dieser Seite:",
            "other": "%{count} Fehler verhinderten das Speichern dieser Seite:"
          },
          "screen": {
            "one": "1 Fehler verhinderte das Speichern dieses Bildschirms:",
            "other": "%{count} Fehler verhinderten das Speichern dieses Bildschirms:"
          },
          "subscription": {
            "one": "1 Fehler verhinderte das Speichern dieses Abonnements:",
            "other": "%{count} Fehler verhinderten das Speichern dieses Abonnements:"
          },
          "template": {
            "one": "1 Fehler verhinderte das Speichern dieser Bildschirmvorlage:",
            "other": "%{count} Fehler verhinderten das Speichern dieser Bildschirmvorlage:"
          },
          "ticker": {
            "one": "1 Fehler verhinderte das Speichern dieses Textes:",
            "other": "%{count} Fehler verhinderten das Speichern dieses Textes:"
          },
          "user": {
            "one": "1 Fehler verhinderte das Speichern dieses Benutzers:",
            "other": "%{count} Fehler verhinderten das Speichern dieses Benutzers:"
          }
        }
      }
    },
    "manage_model": "%{model} verwalten",
    "member_removed": "Mitglied wurde entfernt",
    "membership_applied_for": "Mitgliedschaft in der Gruppe ist ausstehend",
    "membership_approved": "Mitgliedschaft wurde erfolgreich akzeptiert.",
    "membership_approved_failure": "Mitgliedschaft konnte nicht erfolgreich akzeptiert werden.",
    "membership_created": "Mitgliedschaft wurde erfolgreich erstellt.",
    "membership_demoted": "Mitglied wurde erfolgreich als Leiter degradiert.",
    "membership_demoted_failure": "Mitglied konnte nicht erfolgreich als Leiter degradiert werden. Es muss mindestens ein Leiter vorhanden sein",
    "membership_denied": "Mitgliedschaft wurde erfolgreich entfernt.",
    "membership_denied_failure": "Mitgliedschaft wurde nicht erfolgreich entfernt.",
    "membership_promoted": "Mitglied wurde erfolgreich zum Leiter befördert.",
    "membership_promoted_failure": "Mitglied konnte nicht zum Leider befördert werden.",
    "membership_unknown_action": "Unbekannte Mitgliedsaktion gesendet.",
    "missing_default_type": "Standard Beitragstyp fehlt",
    "moderator_mailer": {
      "items_pending": {
        "a_submission_is_pending_moderation": "A submission is pending moderation.",
        "concerto_submission_pending_approval": "Concerto Submission Pending Approval"
      }
    },
    "my_model": "Mein %{model}",
    "name": "Name",
    "new_model": "Neuer %{model}",
    "no": "Nein",
    "number": {
      "currency": {
        "format": {
          "delimiter": ".",
          "format": "%n %u",
          "precision": 2,
          "separator": ",",
          "significant": false,
          "strip_insignificant_zeros": false,
          "unit": "€"
        }
      },
      "format": {
        "delimiter": ".",
        "precision": 2,
        "separator": ",",
        "significant": false,
        "strip_insignificant_zeros": false
      },
      "human": {
        "decimal_units": {
          "format": "%n %u",
          "units": {
            "billion": {
              "one": "Milliarde",
              "other": "Milliarden"
            },
            "million": "Millionen",
            "quadrillion": {
              "one": "Billiarde",
              "other": "Billiarden"
            },
            "thousand": "Tausend",
            "trillion": "Billionen",
            "unit": ""
          }
        },
        "format": {
          "delimiter": "",
          "precision": 1,
          "significant": true,
          "strip_insignificant_zeros": true
        },
        "storage_units": {
          "format": "%n %u",
          "units": {
            "byte": {
              "one": "Byte",
              "other": "Bytes"
            },
            "gb": "GB",
            "kb": "KB",
            "mb": "MB",
            "tb": "TB"
          }
        }
      },
      "percentage": {
        "format": {
          "delimiter": "",
          "format": "%n%"
        }
      },
      "precision": {
        "format": {
          "delimiter": ""
        }
      }
    },
    "other_model": "Anderer %{model}",
    "owns_templates": {
      "one": "Owns one Template",
      "other": "Owns %{count} Templates"
    },
    "parameter": {
      "one": "Parameter",
      "other": "Parameter"
    },
    "parameter_updated": "Parameter wurde erfolgreich aktualisiert.",
    "pending": "Ausstehend",
    "plugin_created": "Komponente erfolgreich installiert.",
    "plugin_created_frozen_env": "Das Plugin wurde erstellt, aber die Applikation läuft in einem \"frozen Bundler environment\". Das Plugin muss im Gemfile hinzugefügt und manuell mit bundler installiert werden.",
    "plugin_creation_failed": "Die Erstellung der Komponente ist fehlgeschlagen.",
    "plugin_removed": "Plugin wurde erfolgreich entfernt.",
    "plugin_removed_frozen_env": "Das Plugin wurde entfernt, aber die Applikation läuft in einem \"frozen Bundler environment\". Das Plugin muss im Gemfile entfernt werden und bundler muss erneut ausgeführt werden.",
    "plugin_updated": "Plugin wurde erfolgreich aktualisiert.",
    "plugin_updated_frozen_env": "Das Plugin wurde aktualisiert, aber die Applikation läuft in einem \"frozen Bundler environement\". Bundler muss neu ausgeführt werden.",
    "position_created": "Position wurde erfolgreich erstellt.",
    "position_updated": "Position wurde erfolgreich aktualisiert.",
    "preferences_updated": "E-Mail Einstellungen wurden aktualisiert.",
    "public_activity": {
      "a_group_which_no_longer_exists": "nicht länger existierende",
      "a_member": "ein Mitglied",
      "concerto_config": {
        "article": "die"
      },
      "concerto_plugin": {
        "article": "die"
      },
      "content": {
        "create": {
          "created_a_new_content": "%{owner} hat einen neuen Beitrag %{item} erstellt",
          "created_a_new_content_with_type": "%{owner} hat einen neuen Beitrag %{item} (%{content_type}) erstellt"
        },
        "destroy": {
          "deleted_the_content": "%{owner} hat den Beitrag %{item} gelöscht",
          "deleted_the_content_with_type": "%{owner} hat den Beitrag %{item} (%{content_type}) gelöscht"
        },
        "update": {
          "updated_the_content": "%{owner} hat den Beitrag %{item} aktualisiert",
          "updated_the_content_with_type": "%{owner} hat den Beitrag %{item} (%{content_type}) aktualisiert"
        }
      },
      "create_the_model": "%{owner} hat %{article} %{model} %{item} erstellt",
      "destroy_the_model": "%{owner} hat %{article} %{model} %{item} gelöscht",
      "feed": {
        "article": "den",
        "create": {
          "created_a_new_feed": "hat einen neuen Kanal erstellt"
        },
        "destroy": {
          "deleted_the_feed": "hat den Kanal gelöscht"
        }
      },
      "field_config": {
        "create": {
          "created_config_for_field_on_screen": "%{owner} hat den Konfigurationsparameter %{config} für das Feld %{field} des Bildschirms %{screen} erstellt"
        },
        "destroy": {
          "deleted_config_for_field_on_screen": "%{owner} hat den Konfigurationsparameter %{config} für das Feld %{field} des Bildschirms %{screen} gelöscht"
        },
        "update": {
          "updated_config_for_field_on_screen": "%{owner} hat den Konfigurationsparameter %{config} für das Feld %{field} des Bildschirms %{screen} aktualisiert"
        }
      },
      "graphic": {
        "article": "das",
        "create": {
          "created_a_new_graphic": "hat ein neues Einzelbild erstellt"
        }
      },
      "group": {
        "article": "die",
        "create": {
          "created_a_new_group": "hat eine neue Gruppe erstellt"
        },
        "destroy": {
          "deleted_the_group": "hat die Gruppe gelöscht"
        }
      },
      "import_the_model": "hat einen %{model}",
      "membership": {
        "article": "die",
        "create": {
          "added_member_to_group": "%{owner} hat %{member} zur Gruppe %{group} als %{role} hinzugefügt",
          "leader": "Leiter",
          "regular_member": "Mitglied"
        },
        "destroy": {
          "removed_member_from_group": "%{owner} hat %{member} von der Gruppe %{group} entfernt"
        }
      },
      "screen": {
        "article": "der",
        "create": {
          "created_a_new_screen": "hat einen Bildschirm erstellt"
        },
        "destroy": {
          "deleted_the_screen": "hat einen Bildschirm gelöscht"
        }
      },
      "setting": "Einstellung",
      "submission": {
        "article": "die",
        "update": {
          "approved_content_for_feed": "%{owner} hat den Beitrag %{content} für den Kanal %{feed} genehmigt",
          "denied_content_for_feed": "%{owner} hat den Beitrag %{content} für den Kanal %{feed} abgelehnt"
        }
      },
      "unknown_user": "Ein unbekannter Benutzer",
      "update_the_model": "%{owner} hat %{article} %{model} %{item} aktualisiert",
      "user": {
        "article": "den",
        "create": {
          "added_a_new_user": "hat einen neuen Benutzer hinzugefügt",
          "registered": "registiert"
        }
      },
      "which_has_since_been_removed": "welcher inzwischen gelöscht wurde"
    },
    "rejected": "Abgelehnt",
    "remove_model": "%{model} löschen",
    "restart_alert": "Ein neues Plugin wurde hinzugefügt. Bitten starten Sie die Applikation neu.",
    "screen_created": "Bildschirm wurde erfolgreich erstellt.",
    "screen_updated": "Bildschirm wurde erfolgreich erstellt.",
    "screens": {
      "feeds": {
        "filter_for_feed": "Nach Kanal filtern",
        "select_feed": "Kanal wählen"
      },
      "form": {
        "auth_action": "Authorisierung-Aktion",
        "authentication": "Autorisierung",
        "connection_details": "Verbindungsdetails",
        "dimensions": "Dimensionen",
        "existing_mac": "Veraltete MAC Adresse verwenden",
        "new_token": "Mit einem neuen Bildschirmcode sichern",
        "new_token_override": "Existierende Autorisierung entfernen und mit einem neuen Bildschirmcode sichern",
        "no_auth": "Keine (ungesichert)",
        "private_token": "Gesichert durch einen geheimen Bildschirmcode",
        "provide_details": "Einstellungen vornehmen"
      },
      "index": {
        "common_templates": "Standard-Bildschirmvorlagen",
        "view_all": "Alle anzeigen"
      },
      "index_body": {
        "add_one": "Fügen Sie einen hinzu",
        "my_screens": "Meine Bildschirme",
        "no_screens": "Keine Bildschirme zur Anzeige.",
        "other_screens": "Andere Bildschirme",
        "to_add": "um einen hinzuzufügen"
      },
      "screen_info": {
        "mac_address": "MAC Adresse: %{mac}",
        "offline": "Offline",
        "online": "Online"
      },
      "show_body": {
        "field": "%{name} Feld",
        "field_settings": {
          "one": "Feld Einstellung",
          "other": "Feldeinstellungen"
        },
        "manage": "Verwalten",
        "preview_screen": "Bildschirm Vorschau",
        "view_field_settings": "Fahren Sie über ein Feld, um dessen Einstellungen zu betrachten."
      },
      "template_selection": {
        "best_fit_templates": "Angepasste Bildschrimvorlagen",
        "select_template": "Wählen Sie eine Bildschirmvorlage"
      },
      "thumbs": {
        "owner": "Besitzer"
      }
    },
    "settings_saved": "Einstellungen gespeichert. Einzelne Einstellungen werden erst nach einem Webserver-Neustart wirksam.",
    "show": "Anzeigen",
    "smtp_send_error": "Ein STMP Fehler ist während dem Senden einer Benachrichtigungsmail aufgetreten. Bitte überprüfen Sie die SMTP Einstellungen. ",
    "smtp_send_error_ssl": "Ein STMP Fehler ist während dem Senden einer Benachrichtigungsmail aufgetreten. Bitte überprüfen Sie die SMTP Einstellungen - es ist möglich das die die SSL Überprüfung deaktiveren müssen.",
    "sorry_access": "Entschuldigung, Sie haben keine Berechtigung um diese Aktion durchzuführen.",
    "status": "Status",
    "submissions": {
      "approval_info": {
        "approved": "Genehmigt",
        "display_from": "Anzeigen von:",
        "display_until": "Anzeigen bis:",
        "duration": "Dauer:",
        "edit_duration": "Dauer bearbeiten",
        "moderated_by": "Von: %{moderator}",
        "seconds": "sekunden",
        "submitted_by": "Eingesendet von",
        "the_dawn_of_time": "Anbeginn der Zeit",
        "the_end_of_time": "Ende der Zeit."
      },
      "index_body": {
        "click_to_jump": "Auf einen Kanal klicken um zu wechseln",
        "items_in_state": {
          "active": {
            "one": "%{count} aktiver Beitrag",
            "other": "%{count} aktive Beiträge"
          },
          "denied": {
            "one": "%{count} entfernter Beitrag",
            "other": "%{count} entfernte Beiträge"
          },
          "expired": {
            "one": "%{count} abgelaufener Beitrag",
            "other": "%{count} abgelaufene Beiträge"
          },
          "future": {
            "one": "%{count} geplanter Beitrag",
            "other": "%{count} geplante Beiträge"
          },
          "generic": {
            "one": "%{count} %{state} Beitrag",
            "other": "%{count} %{state} Beiträge"
          }
        },
        "jump_to_feed": "Zum Kanal...",
        "moderated_by": "Moderiert von",
        "no_state_content": {
          "active": "Keine aktiven Beiträge auf dem Kanal",
          "denied": "Keine entfernten Beiträge",
          "expired": "Keine abgelaufenen Beiträge",
          "future": "Keine geplanten Beiträge",
          "generic": "Keine %{state} Beiträge"
        },
        "no_sub_feeds": "Keine Sub-Kanäle",
        "sub_feeds": "Sub-Kanäle",
        "submissions_pending": {
          "one": "%{count} Beitrag wartet auf Ihre Moderation",
          "other": "%{count} Beiträge warten auf Ihre Moderation"
        },
        "submit_something": "etwas beitragen",
        "subscribed_to_screens": "Subscribed to Screens",
        "to_make_this_feed_happy": "um diesen Kanal zu vervollständigen?",
        "toggle_content_states_to_display": "Wählen Sie einen Beitragsstatus um Beiträge anzuzeigen...",
        "type_to_filter": "Suchbegriff hier eingeben",
        "would_you_kindly": "Möchten Sie"
      },
      "index_header": {
        "all_feeds": "Alle Kanäle",
        "delete_feed": "Kanal löschen",
        "edit_feed": "Kanal bearbeiten",
        "moderated_by": "Dieser Kanal wird moderiert von"
      },
      "moderate_title": "%{name} moderieren",
      "show_body": {
        "also_appears_on": "Ebenfalls eingesendet bei...",
        "approve_this_content": "Beitrag genehmigen",
        "approved": "Genehmigt",
        "deny_this_content": "Beitrag ablehnen"
      },
      "show_header": {
        "all_feeds": "Alle Kanäle"
      },
      "submission_listgriditem": {
        "change_to_approved": "Zu Genehmigt ändern",
        "change_to_denied": "Zu \"Entfernt\" ändern",
        "currently": "momentan",
        "date_range": "%{start} bis %{end}",
        "moderate": "Morderieren",
        "urgent": "Dringend",
        "urgent_tooltip": "Dieser Beitrag hat bereits das angeforderte Startdatum überschritten und Sie sollten ihn moderieren"
      },
      "submission_tile": {
        "approve_this_content": "Diesen Beitrag genehmigen",
        "deny_this_content": "Diesen Betrag ablehnen",
        "has_been_approved": "Dieser Beitrag wurde genehmigt",
        "has_been_denied": "Dieser Beitrag wurde entfernt."
      }
    },
    "subscription_created": "Abonnement wurde erfolgreich erstellt.",
    "subscription_updated": "Abonnement wurde erfolgreich aktualisiert.",
    "subscriptions": {
      "approved_content": {
        "one": "%{count} genehmigter Beitrag",
        "other": "%{count} genehmigte Beiträge"
      },
      "index": {
        "add_a_new_feed": "Einen neuen Kanal hinzufügen...",
        "field": "%{kind} Feld",
        "field_custom_configurations": "Benutzerdefinierte Feld-Konfigurationen",
        "make_changes": "Fürhen Sie zuerst oben Veränderungen durch um zu speichern.",
        "manage_model_for_field": "Verwalten Sie %{model} für das %{name} Feld",
        "no_configuration_yet": "Dieses Feld hat keine Konfiguration",
        "save_changes_to_model": "Änderungen für %{model} speichern",
        "search_and_find_a_feed_to_add": "Suchen Sie einen Kanal um Ihn hinzuzufügen",
        "subscriptions": "Abonnements"
      },
      "records_created": "Abonnement erstellt",
      "records_updated": "Abonnements wurden für dieses Feld auf Ihrem Bildschirm gespeichert",
      "show": {
        "back": "Zurück",
        "edit": "Editiieren",
        "feed": "Kanal:",
        "field": "Feld:",
        "screen": "Bildschirm:",
        "weight": "Gewichtung:"
      },
      "shown_frequently": "Häufig angezeigen",
      "shown_rarely": "Selten angezeigen"
    },
    "support": {
      "array": {
        "last_word_connector": " und ",
        "two_words_connector": " und ",
        "words_connector": ", "
      }
    },
    "template_created": "Bildschirmvorlage wurde erfolgreich erstellt",
    "template_import_error": "Beim Import der Bildschirmvorlage ist ein Fehler aufgetreten. Stellen Sie sicher das die XML Datei gültig ist.",
    "template_import_requires_files": "Importieren einer Bildschirmvorlage benötigt eine XML- und Bild-Datei",
    "template_updated": "Bildschirmvorlage wurde erfolgreich aktualisiert",
    "templates": {
      "from_scratch": "Von vorne beginnen",
      "import_existing": "Existierende Importieren",
      "import_form": {
        "descriptor": "Beschreibungsdatei",
        "image": "Bild",
        "package": "ZIP-Datei"
      },
      "index_body": {
        "add_one": "eine hinzufügen",
        "author": "von",
        "no_templates_html": "Noch keine Bildschirmvorlage vorhanden. Möchten Sie eine %{href}?"
      },
      "new": {
        "invalid_xml": "Die Beschreibungsdatei enthält ungültiges XML",
        "template_import_requires_archive": "Sie müssen eine Archive-Datei (ZIP) auswählen, die Ihre Bildschirmvorlage enthält",
        "template_import_requires_image": "In der ZIP-Datei der Bildschirmvorlage fehlt ein Hintergrundbild",
        "template_import_requires_xml": "In der ZiP-Datei der Bildschirmvorlage fehlt die XML Beschreibung",
        "template_import_requires_zip": "Die ausgewählte Datei ist keine ZIP Datei",
        "template_method": "Bildschirmvorlagen-Methode",
        "template_type": "%{type} Bildschirmvorlage"
      },
      "show_body": {
        "author": "Autor",
        "preview_alt": "%{name} Vorschau",
        "usage": "Von diesen Bildschirmen verwendet:"
      },
      "show_header": {
        "delete_template": "Bildschirmvorlage löschen",
        "edit_template": "Bildschirmvorlage bearbeiten"
      },
      "template": {
        "by": "von %{author}"
      }
    },
    "time": {
      "am": "vormittags",
      "formats": {
        "date": "%d.%m.%y",
        "date_long_year": "%d.%m.%Y",
        "date_time": "%d.%m.%y, %H:%M",
        "default": "%A, %d. %B %Y, %H:%M Uhr",
        "long": "%A, %d. %B %Y, %H:%M Uhr",
        "long_day": "%A %B %e um %H:%M",
        "month_day": "%d/%m",
        "short": "%d. %B, %H:%M Uhr",
        "short_date": "%a, %d.%m.%y",
        "short_day": "%a %b %d %Y",
        "short_month": "%b %d",
        "time_date": "%I:%M %p on %D",
        "twelve_hour_time": "%I:%M %P"
      },
      "pm": "nachmittags"
    },
    "unrecognized_type": "Unbekannter Beitragstyp",
    "update_model": "%{model} aktualisieren",
    "user_created": "Benutzer wurde erfolgreich erstellt.",
    "user_not_created": "Benutzer wurde nicht erstellt",
    "user_not_deletable": "Ein Benutzer, der Bildschirme besitzt oder der letzte Administrator ist, kann nicht gelöscht werden.",
    "user_owns_screens": "Dieser Benutzer kann nicht gelöscht werden, weil er einen oder mehrere Bildschirme besitzt.",
    "user_updated": "Benutzer wurde erfolgreich aktualisiert.",
    "users": {
      "all_users": "Alle Benutzer",
      "change_password": "Passwort ändern",
      "form": {
        "email_label": "user@domain.com",
        "first_label": "Vorname",
        "last_label": "Nachname",
        "options": "Optionen",
        "provide_details": "Einstellungen vornehmen"
      },
      "index": {
        "denied": "Enfernt",
        "leader": "Leiter",
        "moderator": "Moderator",
        "name": "Name",
        "pending": "Ausstehend",
        "system_admin": "Administrator"
      },
      "show_body": {
        "admin": "Admin",
        "content": "Beiträge",
        "content_header": {
          "one": "Hat einen Beitrag eingesendet",
          "other": "Hat %{count} Beiträge eingesendet"
        },
        "dont_receive_emails": "Keine E-Mails erhalten",
        "forever": "für immer",
        "group_header": {
          "one": "Ist Mitglied einer Gruppe",
          "other": "Ist Mitglied von %{count} Gruppen"
        },
        "groups": "Gruppen",
        "leader": "Der Benutzer ist Leiter einer order mehrerer Gruppen",
        "my": "Mein",
        "name": "Name",
        "receive_emails": "E-Mails erhalten",
        "roles": "Rollen",
        "screen_header": {
          "one": "Verwaltet einen Bildschirm",
          "other": "Verwaltet %{count} Bildschirme"
        },
        "screens": "Bildschirme",
        "system_wide_admin": "Dieser Benutzer ist ein systemweiter Administrator",
        "this_is_you": "Das sind Sie"
      }
    },
    "valid_git": "is nicht ein gültiges git repository",
    "views": {
      "pagination": {
        "first": "« Start",
        "last": "Ende »",
        "next": "Weiter »",
        "previous": "&lsaquo; Zurück",
        "truncate": "&hellip;"
      }
    },
    "wont_write_restart_txt": "Concerto unterstützt das Neustarten des Web-Servers nicht. Bitte Starten Sie manuell neu.",
    "yes": "Ja"
  },
  "en": {
    "actions": "Actions",
    "activerecord": {
      "attributes": {
        "concerto_config": {
          "allow_registration": "Allow Open User Registration",
          "allow_user_feed_creation": "Allow User Feed Creation",
          "allow_user_screen_creation": "Allow User Screen Creation",
          "analytics_enabled": "Google Analytics Enabled",
          "analytics_property_id": "Google Web Property ID (API Key)",
          "autostart_delayed_job": "Autostart Delayed Job Processor",
          "confirmable": "Users Must Confirm their Accounts ",
          "content_default_end_time": "Default End Time for Content",
          "content_default_start_time": "Default Start Time for Content",
          "default_content_duration": "Default Content Duration",
          "default_content_run_time": "Default Content Run Time (in days)",
          "default_upload_type": "Default Content Upload Type",
          "dynamic_refresh_time": "Dynamic Content Refresh Time",
          "footer_html": "Footer HTML",
          "http_proxy_settings": "HTTP Proxy Settings",
          "keep_activity_log": "Keep Activity Log",
          "mailer_from": "Mailer From",
          "mailer_host": "Concerto Server Name (FQDN)",
          "mailer_protocol": "Mailer Protocol",
          "max_content_duration": "Max Content Duration (in seconds)",
          "min_content_duration": "Minimum Content Duration (in seconds)",
          "motd_html": "'Message of the Day' HTML",
          "open_weather_map_api_key": "Open Weather Map API Key",
          "openssl_verify_mode_none": "No SMTP SSL Certificate Verification",
          "poll_interval": "Hardware Player Polling Interval",
          "public_concerto": "Public Concerto Access",
          "rubygem_executable": "Ruby Gem Executable",
          "screens_clear_last_content": "Clear Last Content Item from Screen",
          "secret_token": "Secret Token",
          "session_store": "Session Store",
          "setup_complete": "Concerto setup complete",
          "smtp_address": "SMTP Server",
          "smtp_auth_type": "SMTP Authentication Type",
          "smtp_password": "SMTP Password",
          "smtp_port": "SMTP Port",
          "smtp_username": "SMTP Username",
          "start_date_offset": "Time Between Submission and Content Start",
          "system_time_zone": "System Time Zone",
          "use_frontend_to_trigger_cron": "Use Frontend to Trigger Cron",
          "vimeo_api_key": "Vimeo API Key",
          "youtube_api_key": "YouTube API Key"
        },
        "concerto_plugin": {
          "enable": "Enable Gem?",
          "gem_name": "Gem Name",
          "gem_version": "Gem Version",
          "source": "Source",
          "source_url": "Source URL"
        },
        "content": {
          "duration": "Display Duration",
          "end_time": "End Time",
          "name": "Name",
          "start_time": "Start Time"
        },
        "field_config": {
          "key": "Key",
          "value": "Value"
        },
        "group": {
          "name": "Name",
          "narrative": "Group Description",
          "new_leader": "New Leader"
        },
        "kind": {
          "actions": "Actions",
          "name": "Name"
        },
        "position": {
          "bottom": "Bottom",
          "field": "Field",
          "left": "Left",
          "right": "Right",
          "style": "Style",
          "top": "Top"
        },
        "screen": {
          "is_public": "This screen is publicly viewable",
          "location": "Location",
          "name": "Name",
          "owner": "Owner",
          "owner_id": "Owned By",
          "template_id": "Template"
        },
        "submission": {
          "duration": "Duration",
          "moderation_reason": "Reason"
        },
        "template": {
          "author": "Author",
          "is_hidden": "Hidden?",
          "name": "Name"
        },
        "user": {
          "actions": "Actions",
          "email": "Email",
          "first_name": "First Name",
          "is_admin": "Admin Status",
          "last_name": "Last Name",
          "locale": "Locale",
          "password": "Password",
          "password_confirmation": "Confirm Password",
          "receive_moderation_notifications": "Receive Moderation Notifications",
          "time_zone": "Time Zone"
        }
      },
      "errors": {
        "messages": {
          "record_invalid": "Validation failed: %{errors}",
          "restrict_dependent_destroy": {
            "has_many": "Cannot delete record because dependent %{record} exist",
            "has_one": "Cannot delete record because a dependent %{record} exists"
          }
        }
      },
      "models": {
        "client_time": {
          "one": "Client Time",
          "other": "Client Times"
        },
        "concerto_plugin": {
          "one": "Plugin",
          "other": "Plugins"
        },
        "content": {
          "one": "Content",
          "other": "Contents"
        },
        "feed": {
          "one": "Feed",
          "other": "Feeds"
        },
        "field_config": {
          "one": "Config Parameter",
          "other": "Config Parameters"
        },
        "graphic": {
          "one": "Graphic",
          "other": "Graphics"
        },
        "group": {
          "one": "Group",
          "other": "Groups"
        },
        "html_text": {
          "one": "HTML Text",
          "other": "HTML Texts"
        },
        "kind": {
          "one": "Kind",
          "other": "Kinds"
        },
        "position": {
          "one": "Position",
          "other": "Positions"
        },
        "screen": {
          "one": "Screen",
          "other": "Screens"
        },
        "submission": {
          "one": "Submission",
          "other": "Submissions"
        },
        "subscription": {
          "one": "Subscription",
          "other": "Subscriptions"
        },
        "template": {
          "one": "Template",
          "other": "Templates"
        },
        "ticker": {
          "one": "Text",
          "other": "Texts"
        },
        "user": {
          "one": "User",
          "other": "Users"
        }
      }
    },
    "activities": {
      "show": {
        "latest_activity": "Latest Activity"
      }
    },
    "activity_mailer": {
      "submission_update": {
        "approved": "approved",
        "content_schedule": "The content is scheduled to begin showing on %{start} and end on %{end}. It will be shown for %{duration} seconds.",
        "denied": "denied",
        "feed": "feed",
        "for_the": "for the",
        "moderator": "Moderator",
        "moderator_text": "moderator %{moderator} %{status} %{content_name} for the %{feed} feed",
        "reason_rejected": "The reason provided for the rejection is: %{reason}",
        "your_concerto_submission": "Your Concerto Submission %{content_name} has been %{status}"
      },
      "test_email": {
        "body": "This is a sample email sent from Concerto.  If you received it, then your email settings are apparently configured properly.",
        "subject": "Email Configuration Test"
      }
    },
    "add": "Add",
    "add_model": "Add %{model}",
    "all_model": "All %{model}",
    "approve": "Approve",
    "approved": "Approved",
    "are_you_sure": "Are you sure?",
    "are_you_sure_delete_model_key": "Are you sure you want to delete %{model} \"%{key}\"?",
    "are_you_sure_demote_user": "Are you sure you want to demote user \"%{user}\"?",
    "are_you_sure_leave_group": "Are you sure you want to leave the group \"%{group}\"?",
    "are_you_sure_remove_model_key": "Are you sure you want to remove %{model} \"%{key}\"?",
    "are_you_sure_remove_user_group": "Are you sure you want to remove user \"%{user}\" from group \"%{group}\"?",
    "asset_precomp_failed": "Asset precompilation failed. Please make sure the command rake assets:precompile works.",
    "back": "Back",
    "bad_request": "Bad request.",
    "bundle_error": "An error occurred while running bundle install.",
    "cancel": "Cancel",
    "cannot_delete_last_admin": "Cannot delete last admin user.",
    "cannot_delete_template": "Cannot delete template. It has one or more screens associated with it: %{screens}",
    "cant_be_blank": "cant be blank",
    "cant_be_this_content": "cant be this content",
    "cant_be_this_feed": "cant be this feed",
    "cant_write_restart_txt": "An error occurred while restarting the webserver. Please restart it manually.",
    "concerto": "Concerto",
    "concerto_config": {
      "config_check": {
        "configuration_check": "Configuration Check",
        "file_permissions": "Necessary File Permissions",
        "performance": "Performance",
        "security": "Security",
        "software_prerequisites": "Software Prerequisites",
        "unable_to_send_test_email": "Unable to send test email"
      },
      "show": {
        "check_configuration": "Check Configuration",
        "edit_settings": "Edit Global Settings",
        "global_settings": "Global Settings",
        "restart_confirm": "Restarting the webserver may take 10 to 20 seconds. Are you sure you'd like to restart?",
        "restart_webserver": "Restart Webserver",
        "save_settings": "Save Settings"
      }
    },
    "concerto_plugins": {
      "edit": {
        "prohibited_plugin_save": "prohibited plugin save"
      },
      "index": {
        "disabled": "disabled",
        "disabled_msg": "This plugin is currently disabled.",
        "enabled": "enabled",
        "enabled_msg": "This plugin is currently enabled.",
        "gem_description": "Description",
        "status": "Status",
        "upgrade_available": "An updated version of this plugin is available."
      },
      "new": {
        "install_plugin": "Install Plugin",
        "path_instructions": "This should be a path to a directory or file location for the plugin. Please note that on Mac OS X, directories inserted into /var/www/ should be prefixed with /private.",
        "source_url": "Source URL"
      },
      "show": {
        "enabled": "Enabled:",
        "gem_name": "Gem name:",
        "gem_version": "Gem version:",
        "installed": "Installed:",
        "installed_no": "No",
        "installed_yes": "Yes",
        "locked": "(Locked)",
        "source": "Source:",
        "source_url": "Source url:",
        "unknown": "Unknown",
        "upgrade": "Upgrade",
        "upgrade_available": "(Upgrade available to %{version})",
        "visit_plugin_website": "Visit plugin website"
      },
      "sources": {
        "concerto_plugins": "Concerto Plugins",
        "git": "Git Repository",
        "path": "Filesystem Path",
        "rubygems": "RubyGems"
      }
    },
    "content_approved": "Content was approved.",
    "content_created": "Content was successfully created.",
    "content_created_no_feeds": "Content was successfully created. Since no feeds were supplied, content will remain in limbo.",
    "content_deleted": "Content successfully deleted.",
    "content_denied": "Content was denied.",
    "content_expired_mod": "Content expired before moderation could occur.",
    "content_failed_approve": "Content failed to approved.",
    "content_failed_deny": "Content failed to deny.",
    "content_failed_moderation": "Content failed moderation",
    "content_moderated": "Content was moderated.",
    "content_not_found": "Content not found.",
    "content_refreshed": "Content successfully refreshed.",
    "content_updated": "Content was successfully updated.",
    "contents": {
      "dynamic_content_tools": {
        "force_update": "Force Update",
        "owner_tools": "Owner Tools",
        "purge_children": "Purge Children"
      },
      "edit": {
        "edit_content": "Edit %{type} Content"
      },
      "form": {
        "preview": "Preview",
        "provide_details": "Provide Basic Details",
        "select_content_type": "Select Content Type to Add",
        "select_feed": "Select Feed"
      },
      "form_bottom": {
        "submit_content": "Submit Content"
      },
      "form_elements": {
        "dates": {
          "finish_displaying": "Finish Displaying",
          "set_specific_times": "Set specific times",
          "start_displaying": "Start Displaying"
        },
        "duration": {
          "change": "Change",
          "second": {
            "one": "%{count} second",
            "other": "%{count} seconds"
          },
          "show_on_screen": "Show on Screen"
        },
        "feeds": {
          "filter_feeds": "Filter Feeds",
          "no_feeds": "No feeds have been selected yet for this submission.",
          "select_a_feed": "Select a feed",
          "type_to_filter": "Type here to filter"
        },
        "selected_feed_display": {
          "appears_on_screens": "Appears on %{screens_count} screens"
        }
      },
      "form_top": {
        "data": "Data"
      },
      "graphic": {
        "form_top": {
          "accepted_filetypes": "Accepted Filetypes",
          "specify_file": "Specify File",
          "upload_graphic": "Upload Graphic"
        },
        "js": {
          "preview": "Preview..."
        }
      },
      "index": {
        "active": "Hide expired & future content?",
        "browse_content": "Browse Concerto Content",
        "browse_content_by_feed": "Browse Content by Feed",
        "browse_content_by_screen": "Find Content on a Particular Screen",
        "content_search": "Content Search",
        "contents_search": "Concerto Content",
        "feed": "Feed",
        "filtered_content": "Filtered Content",
        "screen": "Screen",
        "search": "Search",
        "type": "Type",
        "user": "User"
      },
      "new": {
        "add_content": "Add %{type} Content",
        "content": "Content",
        "content_type": "Content type to add:",
        "design_graphic": "Design a Graphic",
        "select_type": "Select Type"
      },
      "provide_details": "Provide Details",
      "show": {
        "display_from": "Display From",
        "display_until": "Display Until",
        "feeds_moderation_status": "Submission Status",
        "not_submitted": "This content has not been submitted to any feeds.",
        "submitted_by": "Submitted by",
        "the_dawn_of_time": "The Dawn of Time.",
        "the_end_of_time": "The End of Time."
      },
      "show_details": {
        "content_resubmission": "Content Resubmission",
        "display_from": "Display From",
        "display_until": "Display Until",
        "duration": "Duration",
        "feeds_moderation_status": "Submission Status",
        "not_submitted": "This content has not been submitted to any feeds.",
        "renew_submission": "Renew Submission",
        "seconds": "seconds",
        "submitted_by": "Submitted by",
        "the_dawn_of_time": "The Dawn of Time.",
        "the_end_of_time": "The End of Time."
      },
      "submit_to_feeds": "Submit to Feeds",
      "table": {
        "description": "Description",
        "link": "Link",
        "submitted": "Submitted",
        "title": "Title",
        "updated": "Updated"
      },
      "ticker": {
        "form_top": {
          "allowed_html": "Markdown and some simple formatting html is allowed here.  More information on markdown can be found at http://wikipedia.org/wiki/Markdown.",
          "characters": "Characters",
          "display_format": "Display Format",
          "display_format_tip": "The ticker display format is used for a smaller amount of text usually along the bottom of the screen.  The text display format is used for major text and usually appears where weather and rss feeds appear.",
          "markdown_allowed": "Some markdown or HTML is allowed in this field ",
          "preview": "Preview",
          "ticker_text": "Ticker Text",
          "type_your_message": "Type Your Message"
        }
      }
    },
    "create_model": "Create %{model}",
    "dashboard": {
      "admin_stats": {
        "backup": "Backup",
        "cant_determine_latest_version": "Unable to determine latest available version.",
        "concerto_version": "Concerto Version:",
        "delayed_job_status": "Background Job Engine:",
        "new_version": "A new version (%{version}) is now available.",
        "restart_webserver": "Restart Webserver",
        "running": "Running",
        "start_stop": "How to Start/Stop",
        "stopped": "Stopped",
        "system_info": "System Information",
        "user_stats": "User Stats:"
      },
      "browse": {
        "submissions_to_moderate": {
          "one": "You have %{count} submission to moderate",
          "other": "You have %{count} submissions to moderate"
        }
      },
      "global_preferences": "Global Settings",
      "latest_activity": {
        "more": "More"
      },
      "list_activities": {
        "latest_activity": "Latest Activity"
      },
      "network": {
        "groups": "Groups",
        "no_membership": "You are not yet a member of any group.",
        "screens": "Screens",
        "your_network": "Your Network"
      },
      "vitals": {
        "active": "active",
        "active_content": {
          "one": "active %{content}",
          "other": "active %{content}"
        },
        "network_vitals": "Network Vitals",
        "offline": "offline"
      }
    },
    "date": {
      "abbr_day_names": [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ],
      "abbr_month_names": [
        null,
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      "day_names": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "formats": {
        "default": "%Y-%m-%d",
        "long": "%B %d, %Y",
        "short": "%b %d"
      },
      "month_names": [
        null,
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      "order": [
        "year",
        "month",
        "day"
      ]
    },
    "datetime": {
      "distance_in_words": {
        "about_x_hours": {
          "one": "about 1 hour",
          "other": "about %{count} hours"
        },
        "about_x_months": {
          "one": "about 1 month",
          "other": "about %{count} months"
        },
        "about_x_years": {
          "one": "about 1 year",
          "other": "about %{count} years"
        },
        "almost_x_years": {
          "one": "almost 1 year",
          "other": "almost %{count} years"
        },
        "half_a_minute": "half a minute",
        "less_than_x_minutes": {
          "one": "less than a minute",
          "other": "less than %{count} minutes"
        },
        "less_than_x_seconds": {
          "one": "less than 1 second",
          "other": "less than %{count} seconds"
        },
        "over_x_years": {
          "one": "over 1 year",
          "other": "over %{count} years"
        },
        "x_days": {
          "one": "1 day",
          "other": "%{count} days"
        },
        "x_minutes": {
          "one": "1 minute",
          "other": "%{count} minutes"
        },
        "x_months": {
          "one": "1 month",
          "other": "%{count} months"
        },
        "x_seconds": {
          "one": "1 second",
          "other": "%{count} seconds"
        }
      },
      "prompts": {
        "day": "Day",
        "hour": "Hour",
        "minute": "Minute",
        "month": "Month",
        "second": "Seconds",
        "year": "Year"
      }
    },
    "deny": "Deny",
    "destroy": "Delete",
    "destroy_model": "Delete %{model}",
    "devise": {
      "confirmations": {
        "confirmed": "Your email address has been successfully confirmed.",
        "new": {
          "header": "Resend Confirmation Instructions",
          "submit": "Resend confirmation instructions"
        },
        "send_instructions": "You will receive an email with instructions for how to confirm your email address in a few minutes.",
        "send_paranoid_instructions": "If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."
      },
      "failure": {
        "already_authenticated": "You are already signed in.",
        "inactive": "Your account is not activated yet.",
        "invalid": "Invalid %{authentication_keys} or password.",
        "last_attempt": "You have one more attempt before your account is locked.",
        "locked": "Your account is locked.",
        "not_found_in_database": "Invalid %{authentication_keys} or password.",
        "timeout": "Your session expired. Please sign in again to continue.",
        "unauthenticated": "You need to sign in or sign up before continuing.",
        "unconfirmed": "You have to confirm your email address before continuing."
      },
      "mailer": {
        "confirmation_instructions": {
          "confirm_account_below": "You can confirm your account through the link below:",
          "confirm_my_account": "Confirm my account",
          "subject": "Confirmation instructions",
          "welcome": "Welcome %{user}!"
        },
        "email_changed": {
          "subject": "Email Changed"
        },
        "password_change": {
          "subject": "Password Changed"
        },
        "reset_password_instructions": {
          "change_my_password": "Change my password",
          "hello": "Hello %{user}!",
          "ignore_if_not_requested": "If you didn't request this, please ignore this email.",
          "password_wont_change": "Your password won't change until you access the link above and create a new one.",
          "request_link_to_change_password": "Someone has requested a link to change your password, and you can do this through the link below.",
          "subject": "Reset password instructions"
        },
        "unlock_instructions": {
          "account_locked": "Your account has been locked due to an excessive amount of unsuccessful sign in attempts.",
          "click_to_unlock": "Click the link below to unlock your account:",
          "hello": "Hello %{user}!",
          "subject": "Unlock instructions",
          "unlock_my_account": "Unlock my account"
        }
      },
      "omniauth_callbacks": {
        "failure": "Could not authenticate you from %{kind} because \"%{reason}\".",
        "success": "Successfully authenticated from %{kind} account."
      },
      "passwords": {
        "edit": {
          "header": "Change Password",
          "new_password": "New password",
          "repeat_password": "Repeat password",
          "submit": "Change Password"
        },
        "new": {
          "header": "Forgot your password?",
          "submit": "Send Reset Instructions"
        },
        "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
        "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes.",
        "send_paranoid_instructions": "If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.",
        "updated": "Your password has been changed successfully. You are now signed in.",
        "updated_not_active": "Your password has been changed successfully."
      },
      "registrations": {
        "destroyed": "Bye! Your account has been successfully cancelled. We hope to see you again soon.",
        "edit": {
          "change_password_for": "Change password for %{username}",
          "confirm_password": "Confirm password",
          "current_password": "Current password",
          "new_password": "New password"
        },
        "new": {
          "confirm_password": "Confirm Password",
          "header": "Register Account",
          "name": "Name",
          "submit": "Register Account"
        },
        "signed_up": "Welcome! You have signed up successfully.",
        "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
        "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
        "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.",
        "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirmation link to confirm your new email address.",
        "updated": "Your account has been updated successfully.",
        "updated_but_not_signed_in": "Your account has been updated successfully, but since your password was changed, you need to sign in again."
      },
      "sessions": {
        "already_signed_out": "Signed out successfully.",
        "form": {
          "remember_me": "Remember me",
          "sign_in": "Sign in"
        },
        "new": {
          "remember_me": "Remember me",
          "sign_in": "Sign in"
        },
        "signed_in": "Signed in successfully.",
        "signed_out": "Signed out successfully."
      },
      "shared": {
        "links": {
          "forgot_password": "Forgot your password?",
          "no_confirmation_instructions": "Didn't receive confirmation instructions?",
          "no_unlock_instructions": "Didn't receive unlock instructions?",
          "register_account": "Register account",
          "sign_in": "Sign in",
          "sign_in_with": "Sign in with %{provider}"
        }
      },
      "unlocks": {
        "new": {
          "header": "Resend unlock instructions",
          "submit": "Resend unlock instructions"
        },
        "send_instructions": "You will receive an email with instructions for how to unlock your account in a few minutes.",
        "send_paranoid_instructions": "If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.",
        "unlocked": "Your account has been unlocked successfully. Please sign in to continue."
      }
    },
    "edit": "Edit",
    "edit_model": "Edit %{model}",
    "elements": {
      "owner_select": {
        "no_users_found": "No users found.",
        "select_user": "Select a User...",
        "select_user_title": "Select a User",
        "type_to_filter": "Type to filter ..."
      },
      "topmenu_contents": {
        "accounts": "Accounts",
        "admin": "Admin",
        "backup": "Backup",
        "browse": "Browse",
        "configuration": "Configuration",
        "content": "Content",
        "dashboard_tooltip": "View the Concerto Dashboard",
        "groups": "Groups",
        "leader": "You are a leader of one or more groups",
        "log_out": "Log Out",
        "moderate": "Moderate",
        "network": "Network",
        "no_account": "No account?",
        "now": "now!",
        "pages": "Pages",
        "plugins": "Plugins",
        "restart_webserver": "Restart Webserver",
        "return_home_msg": "Return home",
        "screens": "Screens",
        "settings": "Settings",
        "sign_in": "Sign In",
        "sign_up": "Register",
        "signin_login_spiel": "to upload and manage content.",
        "submissions_to_moderate": {
          "one": "You have %{count} submission to moderate",
          "other": "You have %{count} submissions to moderate"
        },
        "system_admin": "You are a system-wide admin",
        "templates": "Templates",
        "users": "Users",
        "users_and_groups": "User Groups"
      }
    },
    "error_refreshing": "Error refreshing.",
    "errors": {
      "connection_refused": "Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n",
      "error_404": {
        "abort": "Abort!",
        "content_not_found": "I'm afraid we're not in Kansas anymore.",
        "error_message": "The Concerto content you were looking for could not be found.\nSometimes a strategic retreat is the best option."
      },
      "error_generic": {
        "abort": "Abort!",
        "error_message": "Something went wrong. Rest assured, you have been assigned 0% of the blame.",
        "reset_message": "Sometimes a strategic retreat is the best option."
      },
      "format": "%{attribute} %{message}",
      "messages": {
        "accepted": "must be accepted",
        "already_confirmed": "was already confirmed, please try signing in",
        "blank": "can't be blank",
        "confirmation": "doesn't match %{attribute}",
        "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
        "empty": "can't be empty",
        "equal_to": "must be equal to %{count}",
        "even": "must be even",
        "exclusion": "is reserved",
        "expired": "has expired, please request a new one",
        "greater_than": "must be greater than %{count}",
        "greater_than_or_equal_to": "must be greater than or equal to %{count}",
        "in": "must be in %{count}",
        "inclusion": "is not included in the list",
        "invalid": "is invalid",
        "less_than": "must be less than %{count}",
        "less_than_or_equal_to": "must be less than or equal to %{count}",
        "model_invalid": "Validation failed: %{errors}",
        "not_a_number": "is not a number",
        "not_an_integer": "must be an integer",
        "not_found": "not found",
        "not_locked": "was not locked",
        "not_saved": {
          "one": "1 error prohibited this %{resource} from being saved:",
          "other": "%{count} errors prohibited this %{resource} from being saved:"
        },
        "odd": "must be odd",
        "other_than": "must be other than %{count}",
        "password_too_long": "is too long",
        "present": "must be blank",
        "required": "must exist",
        "taken": "has already been taken",
        "too_long": {
          "one": "is too long (maximum is 1 character)",
          "other": "is too long (maximum is %{count} characters)"
        },
        "too_short": {
          "one": "is too short (minimum is 1 character)",
          "other": "is too short (minimum is %{count} characters)"
        },
        "wrong_length": {
          "one": "is the wrong length (should be 1 character)",
          "other": "is the wrong length (should be %{count} characters)"
        }
      },
      "unacceptable_request": "A supported version is expected in the Accept header.\n",
      "unavailable_session": "Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"
    },
    "failed": "failed",
    "feed_created": "Feed was successfully created.",
    "feed_deleted": "Feed was successfully deleted.",
    "feed_updated": "Feed was successfully updated.",
    "feeds": {
      "active": "Active",
      "approved": "Approved",
      "browse_body": {
        "no_content_heading": "I'm afraid we're not in Kansas anymore.",
        "no_content_message": "There doesn't appear to be anything you can view on this Concerto network. You should ",
        "not_submittable": "Submissions not Allowed",
        "not_viewable": "Not Viewable",
        "sign_in": "Sign In",
        "sign_up": "Sign Up",
        "submissions_to_moderate": {
          "one": "You have %{count} submission to moderate",
          "other": "You have %{count} submissions to moderate"
        }
      },
      "browse_header": {
        "browse_content": "Browse Concerto Content"
      },
      "denied": "Denied",
      "expired": "Expired",
      "form": {
        "allowed_types": "Allowed types",
        "other_options": "Other Options",
        "prohibited_feed_save": "prevented this feed from being saved:",
        "provide_details": "Provide Details",
        "settings": "Settings"
      },
      "future": "Future",
      "moderate": {
        "contents_pending_moderation": "Contents Pending Moderation",
        "no_pending_content": "All good for now! None of the feeds you moderate have any pending contents.",
        "nothing_to_moderate": "Nothing to Moderate",
        "with_pending_content": "with pending content"
      },
      "no_availible_feeds": "There are no feeds in the system that you can submit content to.  Please contact your system administrator for more information.",
      "orphaned": "Orphaned",
      "pending": "Pending"
    },
    "field_configs": {
      "index": {
        "field": "field",
        "field_custom_configurations": "Custom Field Configs",
        "manage_model_for_field": "Manage %{model} for %{name} Field",
        "no_configuration_yet": "This field does not have any configuration.",
        "save_changes_to_model": "Save changes to %{model}"
      },
      "show": {
        "back": "Back",
        "edit": "Edit"
      }
    },
    "field_created": "Field was successfully created.",
    "field_deleted": "Field was successfully deleted.",
    "field_updated": "Field was successfully updated.",
    "fields": {
      "index": {
        "used_in_templates": "Used in Templates"
      }
    },
    "file_is_required": "file is required",
    "file_type_unsupported": "file is of type %{type}, which is not supported.",
    "flash": {
      "actions": {
        "create": {
          "notice": "%{resource_name} was successfully created."
        },
        "destroy": {
          "alert": "%{resource_name} could not be destroyed.",
          "notice": "%{resource_name} was successfully destroyed."
        },
        "update": {
          "notice": "%{resource_name} was successfully updated."
        }
      }
    },
    "frontend": {
      "screens": {
        "sign_in": {
          "coming_soon": "Coming Soon: Your New Screen.",
          "configure": "To configure this screen, you will need the following code:",
          "happy_advertising": "Happy Advertising!",
          "step_one": "Step One.",
          "step_one_message": "On your PC or mobile device, log into the \nConcerto Panel and visit the Screens page.",
          "step_three": "Step Three.",
          "step_three_details": "You can add some content to the screen by editing the \nsubscriptions in each field in the Concerto Panel.",
          "step_three_header": "Finally, take a look back at this screen. After a moment, \nyour template should appear.",
          "step_two": "Step Two.",
          "step_two_details": "The screen should not be public. Use the code \ngiven above as the authorization code. If this \nmachine is being reconfigured or is replacing an \nexisting screen, simply click on that screen, click \nedit, ensure that the screen is not public, and enter \nthe authorization code.",
          "step_two_header": "If this is a completely new screen, click \n\"New Screen\" and fill out the relevant details."
        }
      }
    },
    "gem_not_found": "is not a valid rubygem",
    "gems_frozen_warning": "Bundler has been run on Concerto using a frozen gem configuration—likely due to a deployment tool using the --deployment option for Bundler. In this setup, Concerto cannot automatically update the Gemfile with any plugins added/removed here nor install or update Concerto gems automatically.",
    "gemspec_not_found": "Gemspec not found in",
    "group_created": "Group was successfully created.",
    "group_not_deletable": "A group owning screens and/or feeds cannot be deleted.",
    "group_updated": "Group was successfully updated.",
    "groups": {
      "edit": {
        "change_group_memberships": "Change Group Memberships"
      },
      "form": {
        "initial_leader": "Initial Leader",
        "provide_details": "Provide Details"
      },
      "index": {
        "leader": "This person is a leader for this group."
      },
      "manage_members": {
        "add_member": "Add Member",
        "add_users_to_group": "Add Users to Group",
        "approve_requests": "Approve Requests",
        "demote_to_regular": "Demote to Regular",
        "feed_permission": {
          "name": "Feed Permission",
          "tooltip": "What you can change about the feeds owned by this group. You can change nothing, just moderate submissions, or everything (edit feed, moderate submissions)."
        },
        "leader": "Leader",
        "manage_members": "Manage Members",
        "manage_model": "Manage %{model}",
        "member": " member",
        "name": "Name",
        "no_pending_approvals": "No Pending Approvals",
        "no_regular_members": "This group currently has no regular members.",
        "pending": "Pending",
        "permissions": {
          "all": "All",
          "none": "None",
          "submissions": "Submission",
          "subscriptions": "Subscriptions"
        },
        "previously_denied_members": "Previously Denied Members",
        "promote_to_leader": "Promote To Leader",
        "remove_from_group": "Remove From Group",
        "request_made_at": "Request Made At",
        "screen_permission": {
          "name": "Screen Permission",
          "tooltip": "What you can change about the screens owned by this group. You can change nothing, just the subscriptions, or everything (edit screen, change template, and subscriptions)."
        },
        "update_permissions": "Update Permissions"
      },
      "show_body": {
        "edit_group": "Edit Group",
        "feed_header": {
          "one": "Moderates one Feed",
          "other": "Moderates %{count} Feeds"
        },
        "group_description": "Group Description",
        "group_has_no_leaders": "This group currently has no leaders.  You should promote a regular member in the table above.",
        "group_leaders": "Group Leaders",
        "join_group": "Join Group",
        "leader": "Leader",
        "leave_group": "Leave Group",
        "member": " member",
        "member_header": {
          "one": "Contains one Member",
          "other": "Contains %{count} Members"
        },
        "no_pending_approvals": "No Pending Approvals!",
        "not_in_group": "You are not currently in this group.",
        "previously_denied_members": "Previously Denied Members",
        "promote_to_leader": "Promote to Leader",
        "regular_members": "Regular Members",
        "remove_from_group": "Remove from Group",
        "request_made_at": "Request Made At",
        "screen_header": {
          "one": "Manages one Screen",
          "other": "Manages %{count} Screens"
        },
        "your_membership_role": "You are currently a %{level}%{what} of this group."
      },
      "show_header": {
        "group_cannot_be_deleted": "Group cannot be deleted",
        "manage_members": "Manage Members"
      }
    },
    "helpers": {
      "label": {
        "feed": {
          "description": "Description",
          "group": "Group",
          "is_submittable": "Is submittable",
          "is_viewable": "Is viewable",
          "name": "Name",
          "parent": "Parent"
        },
        "graphic": {
          "name": "Name",
          "submit": "Submit"
        },
        "template": {
          "author": "Author",
          "is_hidden": "Hide this template from being shown in lists",
          "media": "New Background Image and/or Custom CSS",
          "name": "Name",
          "owner": "Owner"
        },
        "user": {
          "email": "Email",
          "first_name": "Name",
          "locale": "Locale",
          "password": "Password",
          "password_confirmation": "Confirm Password",
          "receive_moderation_notifications": "Receive Moderation Notifications",
          "time_zone": "Time Zone"
        }
      },
      "page_entries_info": {
        "entry": {
          "one": "entry",
          "other": "entries",
          "zero": "entries"
        },
        "more_pages": {
          "display_entries": "Displaying %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> of <b>%{total}</b> in total"
        },
        "one_page": {
          "display_entries": {
            "one": "Displaying <b>1</b> %{entry_name}",
            "other": "Displaying <b>all %{count}</b> %{entry_name}",
            "zero": "No %{entry_name} found"
          }
        }
      },
      "select": {
        "prompt": "Please select"
      },
      "submit": {
        "create": "Create %{model}",
        "submit": "Save %{model}",
        "update": "Update %{model}"
      }
    },
    "i18n_tasks": {
      "add_missing": {
        "added": {
          "one": "Added %{count} key",
          "other": "Added %{count} keys"
        }
      },
      "cmd": {
        "args": {
          "default_text": "Default: %{value}",
          "desc": {
            "all_locales": "Do not expect key patterns to start with a locale, instead apply them to all locales implicitly.",
            "config": "Override config location",
            "confirm": "Confirm automatically",
            "data_format": "Data format: %{valid_text}.",
            "keep_order": "Keep the order of the keys",
            "key_pattern": "Filter by key pattern (e.g. 'common.*')",
            "locale": "i18n_tasks.common.locale",
            "locale_to_translate_from": "Locale to translate from",
            "locales_filter": "Locale(s) to process. Special: base",
            "missing_types": "Filter by types: %{valid}",
            "nostdin": "Do not read from stdin",
            "out_format": "Output format: %{valid_text}",
            "pattern_router": "Use pattern router: keys moved per config data.write",
            "strict": "Avoid inferring dynamic key usages such as t(\"cats.#{cat}.name\"). Takes precedence over the config setting if set.",
            "translation_backend": "Translation backend (google or deepl)",
            "value": "Value. Interpolates: %%{value}, %%{human_key}, %%{key}, %%{default}, %%{value_or_human_key}, %%{value_or_default_or_human_key}"
          }
        },
        "desc": {
          "add_missing": "add missing keys to locale data, optionally match a pattern",
          "check_consistent_interpolations": "verify that all translations use correct interpolation variables",
          "check_normalized": "verify that all translation data is normalized",
          "config": "display i18n-tasks configuration",
          "cp": "copy the keys in locale data that match the given pattern",
          "data": "show locale data",
          "data_merge": "merge locale data with trees",
          "data_remove": "remove keys present in tree from data",
          "data_write": "replace locale data with tree",
          "eq_base": "show translations equal to base value",
          "find": "show where keys are used in the code",
          "gem_path": "show path to the gem",
          "health": "is everything OK?",
          "irb": "start REPL session within i18n-tasks context",
          "missing": "show missing translations, optionally match a pattern",
          "mv": "rename/merge the keys in locale data that match the given pattern",
          "normalize": "normalize translation data: sort and move to the right files",
          "remove_unused": "remove unused keys",
          "rm": "remove the keys in locale data that match the given pattern",
          "translate_missing": "translate missing keys with Google Translate or DeepL Pro, optionally match a pattern",
          "tree_convert": "convert tree between formats",
          "tree_filter": "filter tree by key pattern",
          "tree_merge": "merge trees",
          "tree_mv_key": "rename/merge/remove the keys matching the given pattern",
          "tree_set_value": "set values of keys, optionally match a pattern",
          "tree_subtract": "tree A minus the keys in tree B",
          "tree_translate": "Google Translate a tree to root locales",
          "unused": "show unused translations"
        },
        "encourage": [
          "Good job!",
          "Well done!",
          "Perfect!"
        ],
        "enum_list_opt": {
          "invalid": "%{invalid} is not in: %{valid}."
        },
        "enum_opt": {
          "invalid": "%{invalid} is not one of: %{valid}."
        },
        "errors": {
          "invalid_format": "invalid format: %{invalid}. valid: %{valid}.",
          "invalid_locale": "invalid locale: %{invalid}",
          "invalid_missing_type": {
            "one": "invalid type: %{invalid}. valid: %{valid}.",
            "other": "unknown types: %{invalid}. valid: %{valid}."
          },
          "pass_forest": "pass locale forest"
        }
      },
      "common": {
        "continue_q": "Continue?",
        "key": "Key",
        "locale": "Locale",
        "n_more": "%{count} more",
        "value": "Value"
      },
      "data_stats": {
        "text": "has %{key_count} keys across %{locale_count} locales. On average, values are %{value_chars_avg} characters long, keys have %{key_segments_avg} segments, a locale has %{per_locale_avg} keys.",
        "text_single_locale": "has %{key_count} keys in total. On average, values are %{value_chars_avg} characters long, keys have %{key_segments_avg} segments.",
        "title": "Forest (%{locales})"
      },
      "deepl_translate": {
        "errors": {
          "no_api_key": "Setup DeepL Pro API key via DEEPL_AUTH_KEY environment variable or translation.deepl_api_key in config/i18n-tasks.yml. Get the key at https://www.deepl.com/pro.",
          "no_results": "DeepL returned no results.",
          "specific_target_missing": "You must supply a specific variant for the given target language e.g. en-us instead of en."
        }
      },
      "google_translate": {
        "errors": {
          "no_api_key": "Set Google API key via GOOGLE_TRANSLATE_API_KEY environment variable or translation.google_translate_api_key in config/i18n-tasks.yml. Get the key at https://code.google.com/apis/console.",
          "no_results": "Google Translate returned no results. Make sure billing information is set at https://code.google.com/apis/console."
        }
      },
      "health": {
        "no_keys_detected": "No keys detected. Check data.read in config/i18n-tasks.yml."
      },
      "inconsistent_interpolations": {
        "none": "No inconsistent interpolations found."
      },
      "missing": {
        "details_title": "Value in other locales or source",
        "none": "No translations are missing."
      },
      "openai_translate": {
        "errors": {
          "no_api_key": "Set OpenAI API key via OPENAI_API_KEY environment variable or translation.openai_api_key in config/i18n-tasks.yml. Get the key at https://openai.com/.",
          "no_results": "OpenAI returned no results."
        }
      },
      "remove_unused": {
        "confirm": {
          "one": "%{count} translation will be removed from %{locales}.",
          "other": "%{count} translation will be removed from %{locales}."
        },
        "noop": "No unused keys to remove",
        "removed": "Removed %{count} keys"
      },
      "translate_missing": {
        "translated": "Translated %{count} keys"
      },
      "unused": {
        "none": "Every translation is in use."
      },
      "usages": {
        "none": "No key usages found."
      },
      "yandex_translate": {
        "errors": {
          "no_api_key": "Set Yandex API key via YANDEX_API_KEY environment variable or translation.yandex_api_key in config/i18n-tasks.yml. Get the key at https://tech.yandex.com/translate.",
          "no_results": "Yandex returned no results."
        }
      }
    },
    "import_model": "Import %{model}",
    "join": "Join",
    "js": {
      "confirmbox": {
        "cancel": "Cancel",
        "ok": "OK",
        "title": "Concerto"
      },
      "duration": {
        "second": {
          "one": "%{count}s",
          "other": "%{count}s"
        }
      }
    },
    "kind_created": "Kind was successfully created.",
    "kind_updated": "Kind was successfully updated.",
    "layouts": {
      "errors": {
        "prohibited_save": {
          "concerto_plugin": {
            "one": "1 error prevented this plugin from being saved:",
            "other": "%{count} errors prevented this plugin from being saved:"
          },
          "feed": {
            "one": "1 error prevented this feed from being saved:",
            "other": "%{count} errors prevented this feed from being saved:"
          },
          "field_config": {
            "one": "1 error prevented this field config from being saved:",
            "other": "%{count} errors prevented this field config from being saved:"
          },
          "generic": {
            "one": "1 error prevented this %{model} from being saved:",
            "other": "%{count} errors prevented this %{model} from being saved:"
          },
          "graphic": {
            "one": "1 error prevented this graphic from being saved:",
            "other": "%{count} errors prevented this graphic from being saved:"
          },
          "group": {
            "one": "1 error prevented this group from being saved:",
            "other": "%{count} errors prevented this group from being saved:"
          },
          "kind": {
            "one": "1 error prevented this kind from being saved:",
            "other": "%{count} errors prevented this kind from being saved:"
          },
          "page": {
            "one": "1 error prevented this page from being saved:",
            "other": "%{count} errors prevented this page from being saved:"
          },
          "screen": {
            "one": "1 error prevented this screen from being saved:",
            "other": "%{count} errors prevented this screen from being saved:"
          },
          "subscription": {
            "one": "1 error prevented this subscription from being saved:",
            "other": "%{count} errors prevented this subscription from being saved:"
          },
          "template": {
            "one": "1 error prevented this template from being saved:",
            "other": "%{count} errors prevented this template from being saved:"
          },
          "ticker": {
            "one": "1 error prevented this text from being saved:",
            "other": "%{count} errors prevented this text from being saved:"
          },
          "user": {
            "one": "1 error prevented this user from being saved:",
            "other": "%{count} errors prevented this user from being saved:"
          }
        }
      }
    },
    "manage_fields": "Manage Fields",
    "manage_model": "Manage %{model}",
    "member_removed": "Member removed",
    "membership_applied_for": "Membership in group is now pending",
    "membership_approved": "Membership was successfully approved.",
    "membership_approved_failure": "Membership was not successfully approved.",
    "membership_created": "Membership was successfully created.",
    "membership_demoted": "Member was successfully demoted from group leader.",
    "membership_demoted_failure": "Member was not successfully demoted from group leader. There must be at least one leader.",
    "membership_denied": "Membership was successfully denied.",
    "membership_denied_failure": "Membership was not successfully denied.",
    "membership_promoted": "Member was successfully promoted to group leader.",
    "membership_promoted_failure": "Member was not successfully promoted to group leader",
    "membership_unknown_action": "Unknown Membership action submitted.",
    "missing_default_type": "Missing Default Content Type",
    "moderator_mailer": {
      "items_pending": {
        "a_submission_is_pending_moderation": "A submission is pending moderation.",
        "concerto_submission_pending_approval": "Concerto Submission Pending Approval"
      }
    },
    "my_model": "My %{model}",
    "name": "name",
    "new_model": "New %{model}",
    "no": "No",
    "number": {
      "currency": {
        "format": {
          "delimiter": ",",
          "format": "%u%n",
          "negative_format": "-%u%n",
          "precision": 2,
          "separator": ".",
          "significant": false,
          "strip_insignificant_zeros": false,
          "unit": "$"
        }
      },
      "format": {
        "delimiter": ",",
        "precision": 3,
        "round_mode": "default",
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false
      },
      "human": {
        "decimal_units": {
          "format": "%n %u",
          "units": {
            "billion": "Billion",
            "million": "Million",
            "quadrillion": "Quadrillion",
            "thousand": "Thousand",
            "trillion": "Trillion",
            "unit": ""
          }
        },
        "format": {
          "delimiter": "",
          "precision": 3,
          "significant": true,
          "strip_insignificant_zeros": true
        },
        "storage_units": {
          "format": "%n %u",
          "units": {
            "byte": {
              "one": "Byte",
              "other": "Bytes"
            },
            "eb": "EB",
            "gb": "GB",
            "kb": "KB",
            "mb": "MB",
            "pb": "PB",
            "tb": "TB",
            "zb": "ZB"
          }
        }
      },
      "nth": {
      },
      "percentage": {
        "format": {
          "delimiter": "",
          "format": "%n%"
        }
      },
      "precision": {
        "format": {
          "delimiter": ""
        }
      }
    },
    "other_model": "Other %{model}",
    "owns_templates": {
      "one": "Owns one Template",
      "other": "Owns %{count} Templates"
    },
    "parameter": {
      "one": "parameter",
      "other": "parameters"
    },
    "parameter_updated": "Parameter was successfully updated.",
    "pending": "Pending",
    "plugin_created": "Concerto plugin was successfully installed.",
    "plugin_created_frozen_env": "The Concerto plugin was created, but Concerto is running in a frozen Bundler environment. The plugin must be added to the Gemfile and installed manually with bundler.",
    "plugin_creation_failed": "Concerto plugin creation failed.",
    "plugin_removed": "Concerto plugin was successfully removed.",
    "plugin_removed_frozen_env": "The Concerto plugin was removed, but Concerto is running in a frozen Bundler environment. The plugin must be removed from the Gemfile and bundler re-run.",
    "plugin_updated": "Concerto plugin was successfully updated.",
    "plugin_updated_frozen_env": "The Concerto plugin was updated, but Concerto is running in a frozen Bundler environment. Bundler must be re-run.",
    "position_created": "Position was successfully created.",
    "position_updated": "Position was successfully updated.",
    "preferences_updated": "Email preferences have been updated.",
    "public_activity": {
      "a_group_which_no_longer_exists": "no longer existing",
      "a_member": "a member",
      "concerto_config": {
        "article": "the"
      },
      "concerto_plugin": {
        "article": "the"
      },
      "content": {
        "create": {
          "created_a_new_content": "%{owner} created a new content %{item}",
          "created_a_new_content_with_type": "%{owner} created a new content %{item} (%{content_type})"
        },
        "destroy": {
          "deleted_the_content": "%{owner} deleted the content %{item}",
          "deleted_the_content_with_type": "%{owner} deleted the content %{item} (%{content_type})"
        },
        "update": {
          "updated_the_content": "%{owner} updated the content %{item}",
          "updated_the_content_with_type": "%{owner} updated the content %{item} (%{content_type})"
        }
      },
      "copy_the_model": "%{owner} copied %{article} %{model} %{item} from %{from}",
      "create_the_model": "%{owner} created %{article} %{model} %{item}",
      "destroy_the_model": "%{owner} deleted %{article} %{model} %{item}",
      "feed": {
        "article": "the",
        "create": {
          "created_a_new_feed": "created a new feed"
        },
        "destroy": {
          "deleted_the_feed": "deleted the feed"
        }
      },
      "field_config": {
        "create": {
          "created_config_for_field_on_screen": "%{owner} created the config %{config} for field %{field} on screen %{screen}"
        },
        "destroy": {
          "deleted_config_for_field_on_screen": "%{owner} deleted the config %{config} for field %{field} on screen %{screen}"
        },
        "update": {
          "updated_config_for_field_on_screen": "%{owner} updated the config %{config} for field %{field} on screen %{screen}"
        }
      },
      "graphic": {
        "article": "the",
        "create": {
          "created_a_new_graphic": "created a new graphic"
        }
      },
      "group": {
        "article": "the",
        "create": {
          "created_a_new_group": "created a new group"
        },
        "destroy": {
          "deleted_the_group": "deleted the group"
        }
      },
      "import_the_model": "imported the %{model}",
      "membership": {
        "approve": {
          "approved_member_of_group": "%{owner} approved %{member} in the %{group} group as a %{role}",
          "leader": "leader",
          "regular_member": "regular member"
        },
        "article": "the",
        "create": {
          "added_member_to_group": "%{owner} added %{member} to the %{group} group as a %{role}",
          "leader": "leader",
          "pending_regular_member": "pending regular member",
          "regular_member": "regular member"
        },
        "demote": {
          "demoted_member_of_group": "%{owner} demoted %{member} in the %{group} group to a %{role}",
          "leader": "leader",
          "regular_member": "regular member"
        },
        "destroy": {
          "removed_member_from_group": "%{owner} removed %{member} from the %{group} group"
        },
        "promote": {
          "leader": "leader",
          "promoted_member_of_group": "%{owner} promoted %{member} in the %{group} group to a %{role}",
          "regular_member": "regular member"
        },
        "update": {
          "updated_member_of_group": "%{owner} %{action} %{member} in the %{group} group"
        }
      },
      "screen": {
        "article": "the",
        "create": {
          "created_a_new_screen": "created a new screen"
        },
        "destroy": {
          "deleted_the_screen": "deleted the screen"
        }
      },
      "setting": "setting",
      "submission": {
        "article": "the",
        "update": {
          "approved_content_for_feed": "%{owner} approved %{content} for feed %{feed}",
          "denied_content_for_feed": "%{owner} denied %{content} for feed %{feed}"
        }
      },
      "template": {
        "article": "the",
        "copy": {
          "copied_a_template": "copied a template"
        }
      },
      "unknown_user": "An unknown user",
      "update_the_model": "%{owner} updated %{article} %{model} %{item}",
      "user": {
        "article": "the",
        "create": {
          "added_a_new_user": "added as new user",
          "registered": "registered"
        }
      },
      "which_has_since_been_removed": "which has since been removed"
    },
    "rejected": "Rejected",
    "remove_model": "Remove %{model}",
    "request_made_at": "Request Made At",
    "restart_alert": "A new plugin has been added.  Please restart the concerto application.",
    "screen_created": "Screen was successfully created.",
    "screen_updated": "Screen was successfully updated.",
    "screens": {
      "feeds": {
        "filter_for_feed": "Filter for Feed",
        "select_feed": "Select Feed"
      },
      "form": {
        "auth_action": "Authentication Action",
        "authentication": "Authentication",
        "connection_details": "Connection Details",
        "dimensions": "Dimensions",
        "existing_mac": "Use existing legacy MAC address",
        "new_token": "Secure with a new token",
        "new_token_override": "Remove existing authentication and secure with a new token",
        "no_auth": "None (Unsecured)",
        "private_token": "Secured by an existing private token",
        "provide_details": "Provide Details"
      },
      "index": {
        "common_templates": "Top 5 Templates",
        "screen_summary": "Screen Summary",
        "view_all": "View All"
      },
      "index_body": {
        "add_one": "Why not add one?",
        "my_screens": "My Screens",
        "no_screens": "Oops - there are no screens to display.",
        "other_screens": "Other Screens",
        "to_add": " to add one"
      },
      "screen_info": {
        "mac_address": "MAC Address: %{mac}",
        "offline": "Offline",
        "online": "Online"
      },
      "show_body": {
        "field": "%{name} Field",
        "field_settings": {
          "one": "Field Setting",
          "other": "Field Settings"
        },
        "manage": "Manage",
        "preview_screen": "Preview Screen",
        "view_field_settings": "Hover over a field below to view its settings."
      },
      "show_details": {
        "fields": "Fields",
        "last_detected_dimensions": "Last Detected Dimensions",
        "publicly_viewable": "Publicly Viewable"
      },
      "template_selection": {
        "best_fit_templates": "Best-Fit Templates",
        "select_template": "Select Template"
      },
      "thumbs": {
        "owner": "owner"
      }
    },
    "settings_saved": "Concerto settings saved.  Some changes may not become effective until the webserver is restarted.",
    "show": "Show",
    "smtp_send_error": "A SMTP error occurred while sending a notification e-mail. Please check the Concerto SMTP settings.",
    "smtp_send_error_ssl": "A SMTP error occurred while sending a notification e-mail. Please check the Concerto SMTP settings-- you might need to disable SSL Verification.",
    "sorry_access": "Sorry, you don't have access to perform this action.",
    "status": "Status",
    "submissions": {
      "approval_info": {
        "approved": "Approved",
        "display_from": "Display From:",
        "display_until": "Display Until:",
        "duration": "Duration:",
        "edit_duration": "Edit duration",
        "moderated_by": "By: %{moderator}",
        "seconds": "seconds",
        "submitted_by": "Submitted By",
        "the_dawn_of_time": "The Dawn of Time.",
        "the_end_of_time": "The End of Time."
      },
      "index_body": {
        "allowed_types": "Allowed Types",
        "click_to_jump": "Click on a feed to jump",
        "items_in_state": {
          "active": {
            "one": "%{count} active item",
            "other": "%{count} active items"
          },
          "denied": {
            "one": "%{count} denied item",
            "other": "%{count} denied items"
          },
          "expired": {
            "one": "%{count} expired item",
            "other": "%{count} expired items"
          },
          "future": {
            "one": "%{count} future item",
            "other": "%{count} future items"
          },
          "generic": {
            "one": "%{count} %{state} item",
            "other": "%{count} %{state} items"
          }
        },
        "jump_to_feed": "Jump to Feed...",
        "moderated_by": "Moderated By",
        "no_state_content": {
          "active": "No active content",
          "denied": "No denied content",
          "expired": "No expired content",
          "future": "No future content",
          "generic": "No %{state} content"
        },
        "no_sub_feeds": "No Sub-feeds",
        "sub_feeds": "Sub-feeds:",
        "submissions_pending": {
          "one": "%{count} item pending your moderation",
          "other": "%{count} items pending your moderation"
        },
        "submit_something": "submit something",
        "subscribed_to_screens": "Subscribed to Screens",
        "to_make_this_feed_happy": "to make this feed a happier place?",
        "toggle_content_states_to_display": "Toggle content states to display...",
        "type_to_filter": "Type here to filter",
        "would_you_kindly": "Would you kindly"
      },
      "index_header": {
        "all_feeds": "All Feeds",
        "delete_feed": "Delete Feed",
        "edit_feed": "Edit Feed",
        "moderated_by": "This feed is moderated by"
      },
      "moderate_title": "Moderate %{name}",
      "show_body": {
        "also_appears_on": "Also submitted to...",
        "approve_this_content": "Approve this content",
        "approved": "Approved",
        "deny_this_content": "Deny this content"
      },
      "show_header": {
        "all_feeds": "All Feeds"
      },
      "submission_listgriditem": {
        "change_to_approved": "Change to Approved",
        "change_to_denied": "Change to Denied",
        "currently": "currently",
        "date_range": "%{start} to %{end}",
        "moderate": "Moderate...",
        "urgent": "Urgent",
        "urgent_tooltip": "Hey! This content has already passed its requested start date and you should moderate it."
      },
      "submission_tile": {
        "approve_this_content": "Approve this content",
        "deny_this_content": "Deny this content",
        "has_been_approved": "This content has been approved.",
        "has_been_denied": "This content has been denied."
      }
    },
    "subscription_created": "Subscription was successfully created.",
    "subscription_updated": "Subscription was successfully updated.",
    "subscriptions": {
      "approved_content": {
        "one": "%{count} approved item",
        "other": "%{count} approved items"
      },
      "index": {
        "add_a_new_feed": "Add A New Feed...",
        "field": "%{kind} field",
        "field_custom_configurations": "Custom Field Configurations",
        "make_changes": "First make some changes above to save.",
        "manage_model_for_field": "Manage %{model} for %{name} Field",
        "no_configuration_yet": "This field does not have any configuration.",
        "save_changes_to_model": "Save changes to %{model}",
        "search_and_find_a_feed_to_add": "Search and Find a Feed to Add",
        "subscriptions": "Subscriptions"
      },
      "records_created": "Subscriptions created",
      "records_updated": "Subscriptions have been saved for this field on your screen.",
      "show": {
        "back": "Back",
        "edit": "Edit",
        "feed": "Feed:",
        "field": "Field:",
        "screen": "Screen:",
        "weight": "Weight:"
      },
      "shown_frequently": "Frequently shown",
      "shown_rarely": "Rarely shown"
    },
    "support": {
      "array": {
        "last_word_connector": ", and ",
        "two_words_connector": " and ",
        "words_connector": ", "
      }
    },
    "template_created": "Template was successfully created.",
    "template_import_error": "A template import error has occurred. Make sure that the XML file for the imported template is valid.",
    "template_import_requires_files": "Importing a template requires an xml file and an image file.",
    "template_updated": "Template was successfully updated.",
    "templates": {
      "form": {
        "background_image_fields": "Existing Background Image and Field Placement",
        "custom_css": "Existing Custom CSS"
      },
      "from_scratch": "Create from Scratch",
      "import_existing": "Import Existing",
      "import_form": {
        "descriptor": "Descriptor file",
        "image": "Image",
        "package": "Package"
      },
      "index_body": {
        "add_one": "add one",
        "author": "by",
        "no_templates_html": "Oops - there are no templates yet.  Why don't you %{href}?"
      },
      "new": {
        "invalid_xml": "The template descriptor file contains invalid XML",
        "template_import_requires_archive": "You need to specify an archive (ZIP) file that contains your template",
        "template_import_requires_image": "Your template package is missing a background image",
        "template_import_requires_xml": "Your template package is missing an xml descriptor",
        "template_import_requires_zip": "The selected file is not a ZIP file",
        "template_method": "Template method:",
        "template_type": "%{type} Template"
      },
      "show_body": {
        "author": "Author",
        "preview_alt": "%{name} Preview",
        "usage": "Used by the following screens:"
      },
      "show_header": {
        "delete_template": "Delete Template",
        "edit_template": "Edit Template"
      },
      "template": {
        "by": "by %{author}",
        "screens": {
          "one": "1 Screen",
          "other": "%{count} Screens"
        }
      }
    },
    "time": {
      "am": "am",
      "formats": {
        "date": "%D",
        "date_long_year": "%m/%d/%Y",
        "date_time": "%D, %l:%M %p",
        "default": "%a, %d %b %Y %H:%M:%S %z",
        "long": "%B %d, %Y %H:%M",
        "long_day": "%A %B %e at %l:%m %p",
        "month_day": "%m/%d",
        "short": "%d %b %H:%M",
        "short_date": "%a %D",
        "short_day": "%a %b %d %Y",
        "short_month": "%b %d",
        "time_date": "%I:%M %p on %D",
        "twelve_hour_time": "%I:%M %P"
      },
      "pm": "pm"
    },
    "unrecognized_type": "Unrecognized content type.",
    "update_model": "Update %{model}",
    "user_created": "User was successfully created.",
    "user_deleted": "User was successfully deleted.",
    "user_not_created": "User not created",
    "user_not_deletable": "A user owning screens or who is the last remaining administrator cannot be deleted.",
    "user_owns_screens": "This user cannot be deleted because they own one or more screens.",
    "user_updated": "User was successfully updated.",
    "users": {
      "all_users": "All Users",
      "change_password": "Change Password",
      "form": {
        "email_label": "user@domain.com",
        "first_label": "First",
        "last_label": "Last",
        "options": "Options",
        "provide_details": "Provide Details"
      },
      "index": {
        "denied": "Denied",
        "leader": "Leader",
        "moderator": "Moderator",
        "name": "Name",
        "pending": "Pending",
        "system_admin": "System Admin"
      },
      "show_body": {
        "admin": "Admin",
        "content": "Content",
        "content_header": {
          "one": "Has Submitted one Item",
          "other": "Has Submitted %{count} Items"
        },
        "dont_receive_emails": "Don't receive emails",
        "forever": "forever",
        "group_header": {
          "one": "Belongs to one Group",
          "other": "Belongs to %{count} Groups"
        },
        "groups": "Groups",
        "leader": "User is a leader of one or more groups",
        "my": "My",
        "name": "Name",
        "receive_emails": "Receive emails",
        "roles": "Roles",
        "screen_header": {
          "one": "Manages one Screen",
          "other": "Manages %{count} Screens"
        },
        "screens": "Screens",
        "system_wide_admin": "This user is a system-wide admin",
        "this_is_you": "This is you."
      }
    },
    "valid_git": "is not a valid git repository",
    "views": {
      "pagination": {
        "first": "&laquo; First",
        "last": "Last &raquo;",
        "next": "Next &rsaquo;",
        "previous": "&lsaquo; Prev",
        "truncate": "&hellip;"
      }
    },
    "wont_write_restart_txt": "Concerto does not support restarting your webserver. Please restart it manually.",
    "yes": "Yes"
  },
  "fr": {
    "actions": "Actions",
    "activerecord": {
      "attributes": {
        "concerto_config": {
          "allow_registration": "Autoriser les utilisateurs à s'inscrire",
          "allow_user_feed_creation": "Autoriser la création de fil par les utilisateurs",
          "allow_user_screen_creation": "Autoriser la création d'écran par les utilisateurs",
          "analytics_enabled": "Google Analytics enabled",
          "analytics_property_id": "Google Web Property ID (API Key)",
          "autostart_delayed_job": "Redémmarrer automatiquement le moteur de tache de fond",
          "confirmable": "Les utilisateurs doivent confirmer leur compte",
          "content_default_end_time": "Date de fin par défaut pour les contenus",
          "content_default_start_time": "Date de début par défaut pour les contenus",
          "default_content_duration": "Durée par défaut pour les contenus",
          "default_content_run_time": "Durée de publication par défaut (en jour)",
          "default_upload_type": "Type de contenu ajouté par défaut",
          "dynamic_refresh_time": "Dynamic Content Refresh Time",
          "footer_html": "Footer HTML",
          "http_proxy_settings": "Http Proxy Settings",
          "keep_activity_log": "Keep Activity Log",
          "mailer_from": "Mail de ",
          "mailer_host": "Concerto Server Name (FQDN)",
          "mailer_protocol": "Mailer Protocol",
          "max_content_duration": "Durée maximum d'affichage (en seconde)",
          "min_content_duration": "Durée minimum d'affichage (en seconde)",
          "motd_html": "'Message of the Day' HTML",
          "openssl_verify_mode_none": "No SMTP SSL Certificate Verification",
          "poll_interval": "Hardware player polling interval",
          "public_concerto": "Concerto accessible publiquement",
          "rubygem_executable": "Ruby Gem Executable",
          "setup_complete": "Concerto setup complete",
          "smtp_address": "SMTP Server",
          "smtp_auth_type": "SMTP Authentication Type",
          "smtp_password": "SMTP Password",
          "smtp_port": "SMTP Port",
          "smtp_username": "SMTP Username",
          "start_date_offset": "temps entre l'ajout de contenu et le démarrage.",
          "system_time_zone": "Fuseaux horaire du système",
          "use_frontend_to_trigger_cron": "Utiliser l'affichage des écrans pour lancer les taches cron"
        },
        "concerto_plugin": {
          "enable": "Enable Gem?",
          "gem_name": "Nome Gem",
          "gem_version": "Version Gem",
          "source": "Source",
          "source_url": "URL Source"
        },
        "content": {
          "duration": "Durée d'affichage",
          "end_time": "Heure de fin",
          "name": "Nom",
          "start_time": "Heure de démarrage"
        },
        "field_config": {
          "key": "Clé",
          "value": "Valeur"
        },
        "group": {
          "name": "Nom",
          "narrative": "Description du groupe",
          "new_leader": "Nouveau chef"
        },
        "kind": {
          "actions": "Actions",
          "name": "Nom"
        },
        "position": {
          "bottom": "Bas",
          "field": "Champs",
          "left": "Gauche",
          "right": "Droite",
          "style": "Style",
          "top": "Haut"
        },
        "screen": {
          "is_public": "Cet écran est visible publiquement",
          "location": "Localisation",
          "name": "Nom",
          "owner": "Propriétaire",
          "owner_id": "Possédé par",
          "template_id": "Modèle"
        },
        "submission": {
          "duration": "Durée",
          "moderation_reason": "Raison"
        },
        "template": {
          "author": "Auteur",
          "is_hidden": "Caché?",
          "name": "Nom"
        },
        "user": {
          "actions": "Actions",
          "email": "Email",
          "first_name": "Prénom",
          "is_admin": "Administrateur",
          "last_name": "Nom",
          "locale": "Langue",
          "password": "Mot de passe",
          "password_confirmation": "Confirmer le mot de passe",
          "receive_moderation_notifications": "Recevoir les notifications de modération",
          "time_zone": "Time Zone"
        }
      },
      "models": {
        "client_time": {
          "one": "Client Time",
          "other": "Client Times"
        },
        "concerto_plugin": {
          "one": "Plugin",
          "other": "Plugins"
        },
        "content": {
          "one": "Content",
          "other": "Contents"
        },
        "feed": {
          "one": "Feed",
          "other": "Feeds"
        },
        "field_config": {
          "one": "Config Parameter",
          "other": "Config Parameters"
        },
        "graphic": {
          "one": "Graphic",
          "other": "Graphics"
        },
        "group": {
          "one": "Group",
          "other": "Groups"
        },
        "html_text": {
          "one": "HTML Text",
          "other": "HTML Texts"
        },
        "kind": {
          "one": "Kind",
          "other": "Kinds"
        },
        "position": {
          "one": "Position",
          "other": "Positions"
        },
        "screen": {
          "one": "Screen",
          "other": "Screens"
        },
        "submission": {
          "one": "Submission",
          "other": "Submissions"
        },
        "subscription": {
          "one": "Subscription",
          "other": "Subscriptions"
        },
        "template": {
          "one": "Template",
          "other": "Templates"
        },
        "ticker": {
          "one": "Text",
          "other": "Texts"
        },
        "user": {
          "one": "User",
          "other": "Users"
        }
      }
    },
    "activities": {
      "show": {
        "latest_activity": "Derni�re activit�"
      }
    },
    "activity_mailer": {
      "submission_update": {
        "approved": "aprouvé",
        "content_schedule": "The content is scheduled to begin showing on %{start} and end on %{end}. It will be shown for %{duration} seconds.",
        "denied": "refusé",
        "feed": "fil",
        "for_the": "pour le",
        "moderator": "Modérateur",
        "moderator_text": "moderator %{moderator} %{status} %{content_name} for the %{feed} feed",
        "reason_rejected": "La raison du refus est :",
        "your_concerto_submission": "Your Concerto Submission %{content_name} has been %{status}"
      }
    },
    "add": "Ajouter",
    "add_model": "Ajouter %{model}",
    "all_model": "Tout %{model}",
    "approve": "Approuver",
    "approved": "Approved",
    "are_you_sure": "Etes vous sur ?",
    "are_you_sure_delete_model_key": "Etes vous sur de vouloir supprimer %{model} %{key} ?",
    "are_you_sure_demote_user": "Etes vous sur de vouloir redescendre l'utilisateur %{user} ?",
    "are_you_sure_leave_group": "Etes vous sur de vouloir quitter %{group} ?",
    "are_you_sure_remove_model_key": "Etes vous sur de vouloir retirer %{model} %{key} ?",
    "are_you_sure_remove_user_group": "Etes vous sur de vouloir retirer %{user} du groupe %{group} ?",
    "asset_precomp_failed": "Asset precompilation failed. Please make sure the command rake assets:precompile works.",
    "back": "Retour",
    "bad_request": "Bad request.",
    "bundle_error": "Une erreur est apparue pendant l'installation du bundle.",
    "cancel": "Annuler",
    "cannot_delete_last_admin": "Le dernier administrateur ne peut pas être supprimé.",
    "cannot_delete_template": "Le modèle ne peut être supprimé. Le modèle est encore utilisé sur ce(s) écran(s) : %{screens}",
    "cant_be_blank": "cant be blank",
    "cant_be_this_content": "cant be this content",
    "cant_be_this_feed": "cant be this feed",
    "cant_write_restart_txt": "Une erreur est apparue pendant le redémarrage du serveur. Redémarrez le manuellement.",
    "concerto": "Concerto",
    "concerto_config": {
      "config_check": {
        "configuration_check": "Configuration Check",
        "file_permissions": "Necessary File Permissions",
        "performance": "Performance",
        "security": "Security",
        "software_prerequisites": "Software Prerequisites"
      },
      "show": {
        "check_configuration": "Check Configuration",
        "edit_settings": "Editer les paramètres généraux",
        "global_settings": "Paramètres généraux",
        "restart_confirm": "Redémarrer le serveur web peut prendre de 10 à 20 secondes. Etes vous sur de vouloir le redémarrer?",
        "restart_webserver": "Redémarrer le serveur web",
        "save_settings": "Enregistrer les paramètres"
      }
    },
    "concerto_plugins": {
      "edit": {
        "prohibited_plugin_save": "prohibited plugin save"
      },
      "index": {
        "disabled": "désactivé",
        "disabled_msg": "Ce plugin est actuellement désactivé.",
        "enabled": "activé",
        "enabled_msg": "Ce plugin est actuellement activé.",
        "gem_description": "Description",
        "status": "Status"
      },
      "new": {
        "install_plugin": "Installer le plugin",
        "path_instructions": "Ceci devrait êtres un chemin vers un dossier ou un fichier pour le plugin. Notez que sur Mac OS X, les dossiers insérés dans /var/www/ devrait être préfixé avec /private.",
        "source_url": "URL source"
      },
      "show": {
        "enabled": "Enabled:",
        "gem_name": "Gem name:",
        "gem_version": "Gem version:",
        "installed": "Installed:",
        "installed_no": "No",
        "installed_yes": "Yes",
        "locked": "(Locked)",
        "source": "Source:",
        "source_url": "Source url:",
        "unknown": "Unknown",
        "upgrade": "Upgrade",
        "upgrade_available": "(Upgrade available to %{version})",
        "visit_plugin_website": "Visit plugin website"
      },
      "sources": {
        "git": "Répertoir Git",
        "path": "Chemin du système de fichier",
        "rubygems": "RubyGems"
      }
    },
    "content_approved": "Le contenu a été approuvé.",
    "content_created": "Le contenu a été créé avec succès.",
    "content_created_no_feeds": "Le contenu a été créé avec succès. Puisqu'aucun fil n'a été affecté, le contenut ne sera pas affiché.",
    "content_deleted": "Content successfully deleted.",
    "content_denied": "Le contenu a été refusé.",
    "content_expired_mod": "Content expired before moderation could occur.",
    "content_failed_approve": "Le contenu n'a pas pu être approuvé.",
    "content_failed_deny": "Le contenu n'a pas pu être refusé.",
    "content_failed_moderation": "Le contenu n'a pas pu être modéré.",
    "content_moderated": "Le contenu a été modéré.",
    "content_not_found": "Contenu non trouvé.",
    "content_refreshed": "Content successfully refreshed.",
    "content_updated": "Le contenu a été mis à jour avec succès.",
    "contents": {
      "dynamic_content_tools": {
        "force_update": "Force Update",
        "owner_tools": "Owner Tools",
        "purge_children": "Purge Children"
      },
      "edit": {
        "edit_content": "Editer le contenu %{type}"
      },
      "form": {
        "preview": "Prévisualisation",
        "provide_details": "Fournir les informations basiques",
        "select_content_type": "Sélectionner le type de contenu à ajouter",
        "select_feed": "Sélectioner un fil"
      },
      "form_bottom": {
        "submit_content": "Envoyer le contenu"
      },
      "form_elements": {
        "dates": {
          "finish_displaying": "Finish Displaying",
          "set_specific_times": "Set specific times",
          "start_displaying": "Start Displaying"
        },
        "duration": {
          "change": "Change",
          "second": {
            "one": "%{count} second",
            "other": "%{count} seconds"
          },
          "show_on_screen": "Show on Screen"
        },
        "feeds": {
          "filter_feeds": "Filtre de fil",
          "no_feeds": "Aucun fil n'a encore été enregistré pour cet envoie.",
          "select_a_feed": "Sélectioner un fil",
          "type_to_filter": "Taper ici pour filter"
        },
        "selected_feed_display": {
          "appears_on_screens": "Apparait sur %{screens_count} écrans"
        }
      },
      "form_top": {
        "data": "Donnée"
      },
      "graphic": {
        "form_top": {
          "accepted_filetypes": "Types de fichier acceptés",
          "specify_file": "Choisir le fichier",
          "upload_graphic": "Ajouter un contenu graphique"
        },
        "js": {
          "preview": "Preview..."
        }
      },
      "index": {
        "active": "Hide expired & future content?",
        "browse_content": "Parcourir les contenus",
        "browse_content_by_feed": "Parcourir les contenus par fil",
        "browse_content_by_screen": "Trouver un contenu sur un écran particulier",
        "content_search": "Content Search",
        "contents_search": "Concerto Content",
        "feed": "Feed",
        "filtered_content": "Contenus filtrés",
        "screen": "Screen",
        "search": "Search",
        "type": "Type",
        "user": "User"
      },
      "new": {
        "add_content": "Ajouter un contenu %{type}",
        "content": "Contenu",
        "content_type": "Type de contenu à ajouter:",
        "design_graphic": "Design a Graphic",
        "select_type": "Selctionner le type"
      },
      "provide_details": "Fournir les détails",
      "show": {
        "display_from": "Afficher de",
        "display_until": "Afficher jusqu'à",
        "feeds_moderation_status": "Statut du contenu",
        "not_submitted": "Ce contenu n'a été ajouté à aucun fil.",
        "submitted_by": "Posté par",
        "the_dawn_of_time": "La nuit des temps.",
        "the_end_of_time": "La fin des temps."
      },
      "show_details": {
        "content_resubmission": "Content Resubmission",
        "display_from": "Display From",
        "display_until": "Display Until",
        "duration": "Duration",
        "feeds_moderation_status": "Submission Status",
        "not_submitted": "This content has not been submitted to any feeds.",
        "seconds": "seconds",
        "submitted_by": "Submitted by",
        "the_dawn_of_time": "The Dawn of Time.",
        "the_end_of_time": "The End of Time."
      },
      "submit_to_feeds": "Insérer dans les fils",
      "table": {
        "description": "Description",
        "link": "Lien",
        "submitted": "Posté",
        "title": "Titre",
        "updated": "Mis à jour"
      },
      "ticker": {
        "form_top": {
          "allowed_html": [
            "disponible sur http://wikipedia.org/wiki/Markdown."
          ],
          "characters": "Caractères",
          "display_format": "Format d'affichage",
          "display_format_tip": "Le format texte défilant est utilisé pour une petite quantité de texte habituellement affiché au bas de l'écran.  Le format texte est habituellement utilisé pour des informations plus conséquentes et affichées en zone principale de l'écran.",
          "markdown_allowed": "L'usage de markdown ou d'HTML est autorisé dans ce champs. ",
          "preview": "Prévisualisation",
          "ticker_text": "Texte défilant",
          "type_your_message": "Taper votre message"
        }
      }
    },
    "create_model": "Cr�er %{model}",
    "dashboard": {
      "admin_stats": {
        "backup": "Sauvegarde",
        "cant_determine_latest_version": "Impossible de déterminer la dernière version.",
        "concerto_version": "Version Concerto:",
        "delayed_job_status": "Moteur de tache de fond:",
        "new_version": "Une nouvelle version (%{version}) est à présent disponible.",
        "restart_webserver": "Redémarrer le serveur",
        "running": "Démmarré",
        "start_stop": "Comment arrêter/démarrer",
        "stopped": "Arrêter",
        "system_info": "Information système",
        "user_stats": "Statistique utilisateur:"
      },
      "browse": {
        "submissions_to_moderate": {
          "one": "Vous avez %{count} post à modérer",
          "other": "Vous avez %{count} posts à modérer"
        }
      },
      "global_preferences": "Paramètres généraux",
      "latest_activity": {
        "more": "More"
      },
      "list_activities": {
        "latest_activity": "Latest Activity"
      },
      "network": {
        "groups": "Groupes",
        "no_membership": "Vous n'êtes pas encore membre d'un groupe.",
        "screens": "Screens",
        "your_network": "Votre résau"
      },
      "vitals": {
        "active": "actif",
        "active_content": {
          "one": "active %{content}",
          "other": "active %{content}"
        },
        "network_vitals": "Statistique résaux",
        "offline": "offline"
      }
    },
    "date": {
      "abbr_day_names": [
        "dim",
        "lun",
        "mar",
        "mer",
        "jeu",
        "ven",
        "sam"
      ],
      "abbr_month_names": [
        null,
        "jan.",
        "fév.",
        "mar.",
        "avr.",
        "mai",
        "juin",
        "juil.",
        "août",
        "sept.",
        "oct.",
        "nov.",
        "déc."
      ],
      "day_names": [
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi"
      ],
      "formats": {
        "default": "%d/%m/%Y",
        "long": "%e %B %Y",
        "short": "%e %b"
      },
      "month_names": [
        null,
        "janvier",
        "février",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "août",
        "septembre",
        "octobre",
        "novembre",
        "décembre"
      ],
      "order": [
        "day",
        "month",
        "year"
      ]
    },
    "datetime": {
      "distance_in_words": {
        "about_x_hours": {
          "one": "environ une heure",
          "other": "environ %{count} heures"
        },
        "about_x_months": {
          "one": "environ un mois",
          "other": "environ %{count} mois"
        },
        "about_x_years": {
          "one": "environ un an",
          "other": "environ %{count} ans"
        },
        "almost_x_years": {
          "one": "presqu'un an",
          "other": "presque %{count} ans"
        },
        "half_a_minute": "une demi-minute",
        "less_than_x_minutes": {
          "one": "moins d'une minute",
          "other": "moins de %{count} minutes",
          "zero": "moins d'une minute"
        },
        "less_than_x_seconds": {
          "one": "moins d'une seconde",
          "other": "moins de %{count} secondes",
          "zero": "moins d'une seconde"
        },
        "over_x_years": {
          "one": "plus d'un an",
          "other": "plus de %{count} ans"
        },
        "x_days": {
          "one": "1 jour",
          "other": "%{count} jours"
        },
        "x_minutes": {
          "one": "1 minute",
          "other": "%{count} minutes"
        },
        "x_months": {
          "one": "1 mois",
          "other": "%{count} mois"
        },
        "x_seconds": {
          "one": "1 seconde",
          "other": "%{count} secondes"
        }
      },
      "prompts": {
        "day": "Jour",
        "hour": "Heure",
        "minute": "Minute",
        "month": "Mois",
        "second": "Seconde",
        "year": "Année"
      }
    },
    "deny": "Refuser",
    "destroy": "Supprimer",
    "destroy_model": "Supprimer %{model}",
    "devise": {
      "confirmations": {
        "new": {
          "header": "Resend Confirmation Instructions",
          "submit": "Resend confirmation instructions"
        }
      },
      "mailer": {
        "confirmation_instructions": {
          "confirm_account_below": "You can confirm your account through the link below:",
          "confirm_my_account": "Confirm my account",
          "welcome": "Welcome %{user}!"
        },
        "reset_password_instructions": {
          "change_my_password": "Change my password",
          "hello": "Hello %{user}!",
          "ignore_if_not_requested": "If you didn't request this, please ignore this email.",
          "password_wont_change": "Your password won't change until you access the link above and create a new one.",
          "request_link_to_change_password": "Someone has requested a link to change your password, and you can do this through the link below."
        },
        "unlock_instructions": {
          "account_locked": "Your account has been locked due to an excessive amount of unsuccessful sign in attempts.",
          "click_to_unlock": "Click the link below to unlock your account:",
          "hello": "Hello %{user}!",
          "unlock_my_account": "Unlock my account"
        }
      },
      "passwords": {
        "edit": {
          "header": "Change Password",
          "new_password": "New password",
          "repeat_password": "Repeat password",
          "submit": "Change Password"
        },
        "new": {
          "header": "Forgot your password?",
          "submit": "Send Reset Instructions"
        }
      },
      "registrations": {
        "edit": {
          "change_password_for": "change password for",
          "confirm_password": "confirm password",
          "current_password": "Current password",
          "new_password": "new password"
        },
        "new": {
          "confirm_password": "Confirm Password",
          "header": "Register Account",
          "name": "Name",
          "submit": "Register Account"
        }
      },
      "sessions": {
        "form": {
          "remember_me": "Remember me",
          "sign_in": "Sign in"
        },
        "new": {
          "remember_me": "Remember me",
          "sign_in": "Sign in"
        }
      },
      "shared": {
        "links": {
          "forgot_password": "Forgot your password?",
          "no_confirmation_instructions": "Didn't receive confirmation instructions?",
          "no_unlock_instructions": "Didn't receive unlock instructions?",
          "register_account": "Register account",
          "sign_in": "Sign in",
          "sign_in_with": "Sign in with %{provider}"
        }
      },
      "unlocks": {
        "new": {
          "header": "Resend unlock instructions",
          "submit": "Resend unlock instructions"
        }
      }
    },
    "edit": "Editer",
    "edit_model": "Editer %{model}",
    "elements": {
      "owner_select": {
        "no_users_found": "No users found.",
        "select_user": "Select a User...",
        "select_user_title": "Select a User",
        "type_to_filter": "Type to filter ..."
      },
      "topmenu_contents": {
        "accounts": "Compte",
        "admin": "Admin",
        "backup": "Sauvegarde",
        "browse": "Parcourir",
        "configuration": "Configuration",
        "content": "Contenu",
        "dashboard_tooltip": "Voir le tableau de bord de concerto",
        "groups": "Groupes",
        "leader": "Vous êtes chef d'au moins un groupe",
        "log_out": "Déconnexion",
        "moderate": "Modéré",
        "network": "Résau",
        "no_account": "Pas de compte ?",
        "now": "maintenant!",
        "plugins": "Plugins",
        "restart_webserver": "Redémarrer le serveur web",
        "return_home_msg": "Retour à l'accueil",
        "screens": "Ecrans",
        "settings": "Paramètres",
        "sign_in": "Connexion",
        "sign_up": "Inscription",
        "signin_login_spiel": "Pour ajouter et géré du contenu.",
        "submissions_to_moderate": {
          "one": "Vous avez %{count} post à modérer",
          "other": "Vous avez %{count} posts à modérer."
        },
        "system_admin": "Vous êtes un administrateur système",
        "templates": "Modèles",
        "users": "Utilisateurs",
        "users_and_groups": "Groupe d'utilisateur"
      }
    },
    "error_refreshing": "Error refreshing.",
    "errors": {
      "error_404": {
        "abort": "Abort!",
        "content_not_found": "I'm afraid we're not in Kansas anymore.",
        "error_message": "The Concerto content you were looking for could not be found.\nSometimes a strategic retreat is the best option.\n"
      },
      "error_generic": {
        "abort": "Abort!",
        "error_message": "Something went wrong. Rest assured, you have been assigned 0% of the blame.",
        "reset_message": "Sometimes a strategic retreat is the best option."
      },
      "format": "%{attribute} %{message}",
      "messages": {
        "accepted": "doit être accepté(e)",
        "blank": "doit être rempli(e)",
        "confirmation": "ne concorde pas avec la confirmation",
        "empty": "doit être rempli(e)",
        "equal_to": "doit être égal à %{count}",
        "even": "doit être pair",
        "exclusion": "n'est pas disponible",
        "greater_than": "doit être supérieur à %{count}",
        "greater_than_or_equal_to": "doit être supérieur ou égal à %{count}",
        "inclusion": "n'est pas inclus(e) dans la liste",
        "invalid": "n'est pas valide",
        "less_than": "doit être inférieur à %{count}",
        "less_than_or_equal_to": "doit être inférieur ou égal à %{count}",
        "not_a_number": "n'est pas un nombre",
        "not_an_integer": "doit être un nombre entier",
        "odd": "doit être impair",
        "other_than": "doit être différent de %{count}",
        "present": "doit être vide",
        "record_invalid": "La validation a échoué : %{errors}",
        "restrict_dependent_destroy": {
          "many": "Suppression impossible: d'autres enregistrements sont liés",
          "one": "Suppression impossible: un autre enregistrement est lié"
        },
        "taken": "n'est pas disponible",
        "too_long": {
          "one": "est trop long (pas plus d'un caractère)",
          "other": "est trop long (pas plus de %{count} caractères)"
        },
        "too_short": {
          "one": "est trop court (au moins un caractère)",
          "other": "est trop court (au moins %{count} caractères)"
        },
        "wrong_length": {
          "one": "ne fait pas la bonne longueur (doit comporter un seul caractère)",
          "other": "ne fait pas la bonne longueur (doit comporter %{count} caractères)"
        }
      },
      "template": {
        "body": "Veuillez vérifier les champs suivants : ",
        "header": {
          "one": "Impossible d'enregistrer ce(tte) %{model} : 1 erreur",
          "other": "Impossible d'enregistrer ce(tte) %{model} : %{count} erreurs"
        }
      }
    },
    "failed": "failed",
    "feed_created": "Le fil a été créé avec succès.",
    "feed_updated": "Le fil a été mis à jour avec succès.",
    "feeds": {
      "active": "Active",
      "approved": "Approuvé",
      "browse_body": {
        "no_content_heading": "I'm afraid we're not in Kansas anymore.",
        "no_content_message": "Il semble que vous ne puissez rien voir ici. Vous devriez ",
        "not_submittable": "Submissions not Allowed",
        "not_viewable": "Not Viewable",
        "sign_in": "Connexion",
        "sign_up": "Inscription"
      },
      "browse_header": {
        "browse_content": "Parcourir les contenus"
      },
      "denied": "Refusé",
      "expired": "Expiré",
      "form": {
        "allowed_types": "Types autorisés",
        "other_options": "Autres options",
        "prohibited_feed_save": "Empèche ce fil d'être sauvegardé :",
        "provide_details": "Fournir les détails",
        "settings": "Paramètres"
      },
      "future": "Future",
      "moderate": {
        "contents_pending_moderation": "Contenus en attente de modération",
        "no_pending_content": "Tout est bon pour l'instant! Vous n'avez pas de contenu à modérer.",
        "nothing_to_moderate": "Rien à modérer",
        "with_pending_content": "avec contenus en modération"
      },
      "no_availible_feeds": "Il n'y a pas de fil dans le système dans lequel vous pouvez poster.  Contactez votre administrateur pour plus d'information.",
      "orphaned": "Orphelin",
      "pending": "En attente"
    },
    "field_configs": {
      "index": {
        "field": "Champs",
        "field_custom_configurations": "Configuration du champs personnalisées",
        "manage_model_for_field": "Gérer %{model} pour le champs %{name}",
        "no_configuration_yet": "Ce champs n'est pas configuré.",
        "save_changes_to_model": "Enregistrer les changements de %{model}"
      },
      "show": {
        "back": "Back",
        "edit": "Edit"
      }
    },
    "field_created": "Le champs a été créé avec succès.",
    "field_updated": "Le champs a été mis à jour avec succès.",
    "file_is_required": "file is required",
    "file_type_unsupported": "file is of type %{type}, which is not supported.",
    "frontend": {
      "screens": {
        "sign_in": {
          "coming_soon": "Coming Soon: Your New Screen.",
          "configure": "To configure this screen, you will need the following code:",
          "happy_advertising": "Happy Advertising!",
          "step_one": "Step One.",
          "step_one_message": "On your PC or mobile device, log into the\nConcerto Panel and visit the\nScreens page.\n",
          "step_three": "Step Three.",
          "step_three_details": "You can add some content to the screen by editing the\nsubscriptions\nin each field in the Concerto Panel.\n",
          "step_three_header": "Finally, take a look back at this screen. After a moment,\nyour template\nshould appear.\n",
          "step_two": "Step Two.",
          "step_two_details": "The screen should not be public. Use the code\ngiven above as the authorization\ncode. If this\nmachine is being reconfigured or is replacing an\nexisting screen, simply\nclick on that screen, click\nedit, ensure that the screen is not public, and enter\nthe\nauthorization code.\n",
          "step_two_header": "If this is a completely new screen, click\n\"New Screen\" and fill out\nthe relevant details.\n"
        }
      }
    },
    "gem_not_found": "is not a valid rubygem",
    "gems_frozen_warning": "Bundler has been run on Concerto using a frozen gem configuration—likely due to a deployment tool using the --deployment option for Bundler. In this setup, Concerto cannot automatically update the Gemfile with any plugins added/removed here nor install or update Concerto gems automatically.",
    "gemspec_not_found": "Gemspec not found in",
    "group_created": "Le groupe a été créé avec succès.",
    "group_not_deletable": "Un groupe possédant des fils ou des écrans ne peut pas être supprimé.",
    "group_updated": "Le fil a été mis à jour avec succès avec succès.",
    "groups": {
      "edit": {
        "change_group_memberships": "Gérer les utilisateurs du groupe"
      },
      "form": {
        "initial_leader": "Chef initial",
        "provide_details": "Fournit les détails"
      },
      "index": {
        "leader": "Cet utilisateur est un chef de ce groupe."
      },
      "manage_members": {
        "add_member": "Ajouter un membre",
        "add_users_to_group": "Ajouter un utilisateur au groupe",
        "approve_requests": "Autoriser les requêtes",
        "demote_to_regular": "Redescendre à membre.",
        "feed_permission": {
          "name": "Permission sur les fils",
          "tooltip": "Ce que vous poucez changer des permissions sur les écrans appartenant au groupe. Vous pouvez ne rien changer, autoriser la modération, ou tout autoriser (éditer le fil et autoriser la modération)."
        },
        "leader": "Chef",
        "manage_members": "Manage Members",
        "manage_model": "Gérer %{model}",
        "member": " Membre",
        "name": "Name",
        "no_pending_approvals": "No Pending Approvals",
        "no_regular_members": "This group currently has no regular members.",
        "permissions": {
          "all": "All",
          "none": "None",
          "submissions": "Submission",
          "subscriptions": "Subscriptions"
        },
        "promote_to_leader": "Promote To Leader",
        "remove_from_group": "Remove From Group",
        "request_made_at": "request_made_at",
        "screen_permission": {
          "name": "Permissions sur les écrans",
          "tooltip": "Ce que vous pouvez changer des permissions sur les écrans appartenant au groupe. Vous pouvez ne rien changer, autoriser les inscriptions à un fil ou tous les paramètres (taille, modèle, fils etc.)."
        },
        "update_permissions": "Mettre les permissions à jour"
      },
      "show_body": {
        "edit_group": "Editer le groupe",
        "feed_header": {
          "one": "Modère un Fils",
          "other": "Modère %{count} Fils"
        },
        "group_description": "Description du groupe",
        "group_has_no_leaders": "Ce groupe n'a actuellment pas de chef.  Vous devriez promouvoir un des membres régulier.",
        "group_leaders": "Chef de groupe",
        "join_group": "Rejoindre le groupe",
        "leader": "Chef",
        "leave_group": "Quitter le groupe",
        "member": " Membre",
        "member_header": {
          "one": "Contient un Membre",
          "other": "Contient %{count} Membres"
        },
        "no_pending_approvals": "Pas d'approbation en attente!",
        "not_in_group": "Vous n'êtes pas actuellment dans ce groupe.",
        "previously_denied_members": "Previously Denied Members",
        "promote_to_leader": "Promouvoir en chef de groupe",
        "regular_members": "Membres réguliers",
        "remove_from_group": "Retirer du groupe",
        "request_made_at": "Requête faite à",
        "screen_header": {
          "one": "Gère un Ecran",
          "other": "Gère %{count} Ecrans"
        },
        "your_membership_role": "Vous êtes actuelllement  %{level}%{what} de ce groupe."
      },
      "show_header": {
        "group_cannot_be_deleted": "Le groupe ne peut pas être supprimé",
        "manage_members": "Gérer les membres"
      }
    },
    "helpers": {
      "label": {
        "feed": {
          "description": "Description",
          "group": "Groupe",
          "is_submittable": "Ouvert au poste de contenu",
          "is_viewable": "Est visible",
          "name": "Nom",
          "parent": "Parent"
        },
        "graphic": {
          "name": "Nom",
          "submit": "Envoyé"
        },
        "template": {
          "author": "Author",
          "is_hidden": "Hide this template from being shown in lists",
          "media": "Background Image/CSS",
          "name": "Name",
          "owner": "Owner"
        },
        "user": {
          "email": "Email",
          "first_name": "Name",
          "locale": "locale",
          "password": "Password",
          "password_confirmation": "Confirm Password",
          "receive_moderation_notifications": "Receive Moderation Notifications",
          "time_zone": "Time Zone"
        }
      },
      "page_entries_info": {
        "more_pages": {
          "display_entries": "%{entry_name}  <b>%{first} - %{last}</b> sur <b>%{total}</b> au total"
        },
        "one_page": {
          "display_entries": {
            "one": "<b>%{count}</b> %{entry_name}",
            "other": "<b>tous les %{count}</b> %{entry_name}"
          }
        }
      },
      "select": {
        "prompt": "Veuillez sélectionner"
      },
      "submit": {
        "create": "Créer un(e) %{model}",
        "submit": "Enregistrer ce(tte) %{model}",
        "update": "Modifier ce(tte) %{model}"
      }
    },
    "import_model": "Importer %{model}",
    "join": "Rejoindre",
    "js": {
      "confirmbox": {
        "cancel": "Cancel",
        "ok": "OK",
        "title": "Concerto"
      },
      "duration": {
        "second": {
          "one": "%{count}s",
          "other": "%{count}s"
        }
      }
    },
    "kind_created": "La cétégorie a bien été créée.",
    "kind_updated": "La catégorie a bien été mise à jour.",
    "layouts": {
      "errors": {
        "prohibited_save": {
          "concerto_plugin": {
            "one": "1 error prevented this plugin from being saved:",
            "other": "%{count} errors prevented this plugin from being saved:"
          },
          "feed": {
            "one": "1 error prevented this feed from being saved:",
            "other": "%{count} errors prevented this feed from being saved:"
          },
          "field_config": {
            "one": "1 error prevented this field config from being saved:",
            "other": "%{count} errors prevented this field config from being saved:"
          },
          "generic": {
            "one": "1 error prevented this %{model} from being saved:",
            "other": "%{count} errors prevented this %{model} from being saved:"
          },
          "graphic": {
            "one": "1 error prevented this graphic from being saved:",
            "other": "%{count} errors prevented this graphic from being saved:"
          },
          "group": {
            "one": "1 error prevented this group from being saved:",
            "other": "%{count} errors prevented this group from being saved:"
          },
          "kind": {
            "one": "1 error prevented this kind from being saved:",
            "other": "%{count} errors prevented this kind from being saved:"
          },
          "page": {
            "one": "1 error prevented this page from being saved:",
            "other": "%{count} errors prevented this page from being saved:"
          },
          "screen": {
            "one": "1 error prevented this screen from being saved:",
            "other": "%{count} errors prevented this screen from being saved:"
          },
          "subscription": {
            "one": "1 error prevented this subscription from being saved:",
            "other": "%{count} errors prevented this subscription from being saved:"
          },
          "template": {
            "one": "1 error prevented this template from being saved:",
            "other": "%{count} errors prevented this template from being saved:"
          },
          "ticker": {
            "one": "1 error prevented this text from being saved:",
            "other": "%{count} errors prevented this text from being saved:"
          },
          "user": {
            "one": "1 error prevented this user from being saved:",
            "other": "%{count} errors prevented this user from being saved:"
          }
        }
      }
    },
    "manage_model": "G�rer %{model}",
    "member_removed": "Membre retiré.",
    "membership_applied_for": "L'ajout de appartenance au groupe est en cour.",
    "membership_approved": "L'appartenance au groupe a bien été approuvée.",
    "membership_approved_failure": "L'appartenance au groupe n'a pas pu être approuvée.",
    "membership_created": "L'appartenance au groupe a bien été ajoutée.",
    "membership_demoted": "Le membre a bien été rétrogradé et n'est plu chef de groupe.",
    "membership_demoted_failure": "Le membre est touours chef de groupe. Il doit y avoir au moins un chef de groupe.",
    "membership_denied": "L'appartenance au groupe a bien été retirée.",
    "membership_denied_failure": "L'appartenance au groupe n'a pas pu être retirée.",
    "membership_promoted": "Le membre a bien été promu chef de groupe.",
    "membership_promoted_failure": "Le membre n'a pas été promu chef de groupe.",
    "membership_unknown_action": "L'action d'appartenance envoyée est inconnue.",
    "missing_default_type": "Missing Default Content Type",
    "moderator_mailer": {
      "items_pending": {
        "a_submission_is_pending_moderation": "A submission is pending moderation.",
        "concerto_submission_pending_approval": "Concerto Submission Pending Approval"
      }
    },
    "my_model": "Mon %{model}",
    "name": "name",
    "new_model": "Nouveau %{model}",
    "no": "No",
    "number": {
      "currency": {
        "format": {
          "delimiter": " ",
          "format": "%n %u",
          "precision": 2,
          "separator": ",",
          "significant": false,
          "strip_insignificant_zeros": false,
          "unit": "€"
        }
      },
      "format": {
        "delimiter": " ",
        "precision": 3,
        "separator": ",",
        "significant": false,
        "strip_insignificant_zeros": false
      },
      "human": {
        "decimal_units": {
          "format": "%n %u",
          "units": {
            "billion": "milliard",
            "million": "million",
            "quadrillion": "million de milliards",
            "thousand": "millier",
            "trillion": "billion",
            "unit": ""
          }
        },
        "format": {
          "delimiter": "",
          "precision": 2,
          "significant": true,
          "strip_insignificant_zeros": true
        },
        "storage_units": {
          "format": "%n %u",
          "units": {
            "byte": {
              "one": "octet",
              "other": "octets"
            },
            "gb": "Go",
            "kb": "ko",
            "mb": "Mo",
            "tb": "To"
          }
        }
      },
      "percentage": {
        "format": {
          "delimiter": "",
          "format": "%n%"
        }
      },
      "precision": {
        "format": {
          "delimiter": ""
        }
      }
    },
    "other_model": "Autre %{model}",
    "owns_templates": {
      "one": "Owns one Template",
      "other": "Owns %{count} Templates"
    },
    "parameter": {
      "one": "parameter",
      "other": "parameters"
    },
    "parameter_updated": "Les paramètres ont été mis à jour avec succès.",
    "pending": "Pending",
    "plugin_created": "Le plugin Concerto a bien été créé.",
    "plugin_created_frozen_env": "The Concerto plugin was created, but Concerto is running in a frozen Bundler environment. The plugin must be added to the Gemfile and installed manually with bundler.",
    "plugin_creation_failed": "La création du plugin a échouée.",
    "plugin_removed": "Concerto plugin was successfully removed.",
    "plugin_removed_frozen_env": "The Concerto plugin was removed, but Concerto is running in a frozen Bundler environment. The plugin must be removed from the Gemfile and bundler re-run.",
    "plugin_updated": "Le plugin Concerto a bien été mis à jour.",
    "plugin_updated_frozen_env": "The Concerto plugin was updated, but Concerto is running in a frozen Bundler environment. Bundler must be re-run.",
    "position_created": "La position a bien été créée.",
    "position_updated": "La position a bien été mise à jour.",
    "preferences_updated": "Les préférences de mail ont été mises à jour.",
    "public_activity": {
      "a_group_which_no_longer_exists": "a no longer existing group",
      "a_member": "un membre",
      "concerto_config": {
        "article": "the"
      },
      "concerto_plugin": {
        "article": "the"
      },
      "content": {
        "create": {
          "created_a_new_content": "%{owner} created a new content %{item}",
          "created_a_new_content_with_type": "%{owner} created a new content %{item} (%{content_type})"
        },
        "destroy": {
          "deleted_the_content": "%{owner} deleted the content %{item}",
          "deleted_the_content_with_type": "%{owner} deleted the content %{item} (%{content_type})"
        },
        "update": {
          "updated_the_content": "%{owner} updated the content %{item}",
          "updated_the_content_with_type": "%{owner} updated the content %{item} (%{content_type})"
        }
      },
      "create_the_model": "a créé %{model}",
      "destroy_the_model": "a supprimé %{model}",
      "feed": {
        "article": "the",
        "create": {
          "created_a_new_feed": "a créé un nouveau fil"
        },
        "destroy": {
          "deleted_the_feed": "a supprimé le fil"
        }
      },
      "field_config": {
        "create": {
          "created_config_for_field_on_screen": "%{owner} created the config %{config} for field %{field} on screen %{screen}"
        },
        "destroy": {
          "deleted_config_for_field_on_screen": "%{owner} deleted the config %{config} for field %{field} on screen %{screen}"
        },
        "update": {
          "updated_config_for_field_on_screen": "%{owner} updated the config %{config} for field %{field} on screen %{screen}"
        }
      },
      "graphic": {
        "article": "the",
        "create": {
          "created_a_new_graphic": "a créé un nouveau post graphique"
        }
      },
      "group": {
        "article": "the",
        "create": {
          "created_a_new_group": "a créé un nouveau groupe"
        },
        "destroy": {
          "deleted_the_group": "a supprimé un groupe"
        }
      },
      "import_the_model": "a importé %{model}",
      "membership": {
        "article": "the",
        "create": {
          "added_member_to_group": "%{owner} added %{member} to the %{group} group as a %{role}",
          "leader": "chef",
          "regular_member": "membre"
        },
        "destroy": {
          "removed_member_from_group": "%{owner} removed %{member} from the %{group} group"
        }
      },
      "screen": {
        "article": "the",
        "create": {
          "created_a_new_screen": "a créé un nouvel écran"
        },
        "destroy": {
          "deleted_the_screen": "a supprimé l'écran"
        }
      },
      "setting": "paramètre",
      "submission": {
        "article": "the",
        "update": {
          "approved_content_for_feed": "%{owner} approved %{content} for feed %{feed}",
          "denied_content_for_feed": "%{owner} denied %{content} for feed %{feed}"
        }
      },
      "unknown_user": "Un utilisateur inconnu",
      "update_the_model": "a mis à jour %{model}",
      "user": {
        "article": "the",
        "create": {
          "added_a_new_user": "a ajouté un nouvel utilisateur",
          "registered": "inscrit"
        }
      },
      "which_has_since_been_removed": "qui a été retirée depuis"
    },
    "rejected": "Rejected",
    "remove_model": "Retirer %{model}",
    "restart_alert": "Un nouveau plugin a été ajouté.  Redémarrez l'application Concerto.",
    "screen_created": "L'écran a bien été créer.",
    "screen_updated": "L'écran a bien été mise à jour.",
    "screens": {
      "feeds": {
        "filter_for_feed": "Filter for Feed",
        "select_feed": "Sélectionner un fil"
      },
      "form": {
        "auth_action": "Action d'autenfication",
        "authentication": "Autentification",
        "connection_details": "Détails de la connection",
        "dimensions": "Dimensions",
        "existing_mac": "Utiliser une adresse MAC existante",
        "new_token": "Sécuriser avec un noveau jeton",
        "new_token_override": "Supprimer l'autentification actuelle et sécuriser avec un noveau jeton",
        "no_auth": "Aucune (non sécrisé)",
        "private_token": "Sécurisé par un jeton privé existant",
        "provide_details": "Fournir les détails"
      },
      "index": {
        "common_templates": "Modèle commun",
        "view_all": "Voir tout"
      },
      "index_body": {
        "add_one": "Pourquoi ne pas en ajouter un ?",
        "my_screens": "Mes écrans",
        "no_screens": "Oups - il n'y a pas d'écran à afficher.",
        "other_screens": "Autres écrans",
        "to_add": "Pour en ajouter un"
      },
      "screen_info": {
        "mac_address": "MAC Add ress: %{mac}",
        "offline": "Offline",
        "online": "Online"
      },
      "show_body": {
        "field": "%{name} Field",
        "field_settings": {
          "one": "réglage sur place",
          "other": "paramètres de terrain"
        },
        "manage": "Gérer",
        "preview_screen": "Prévisualiser l'écran",
        "view_field_settings": "Hover over a field below to view its settings."
      },
      "template_selection": {
        "best_fit_templates": "Modèles les plus appropriés",
        "select_template": "Choisir le modèle"
      },
      "thumbs": {
        "owner": "propriétaire"
      }
    },
    "settings_saved": "Paramètres de Concerto sauvegardés.  Certains changements pourraient n'être effectifs qu'au redémarrage du serveur.",
    "show": "Montrer",
    "smtp_send_error": "A SMTP error occurred while sending a notification e-mail. Please check the Concerto SMTP settings.",
    "smtp_send_error_ssl": "A SMTP error occurred while sending a notification e-mail. Please check the Concerto SMTP settings-- you might need to disable SSL Verification.",
    "sorry_access": "Sorry, you don't have access to perform this action.",
    "status": "Status",
    "submissions": {
      "approval_info": {
        "approved": "Approved",
        "display_from": "Display From:",
        "display_until": "Display Until:",
        "duration": "Duration:",
        "edit_duration": "Editer la durée",
        "moderated_by": "By: %{moderator}",
        "seconds": "seconds",
        "submitted_by": "Submitted By",
        "the_dawn_of_time": "The Dawn of Time.",
        "the_end_of_time": "The End of Time."
      },
      "index_body": {
        "click_to_jump": "Cliquez sur pour aller à un fil",
        "items_in_state": {
          "active": {
            "one": "%{count} active item",
            "other": "%{count} active items"
          },
          "denied": {
            "one": "%{count} denied item",
            "other": "%{count} denied items"
          },
          "expired": {
            "one": "%{count} expired item",
            "other": "%{count} expired items"
          },
          "future": {
            "one": "%{count} future item",
            "other": "%{count} future items"
          },
          "generic": {
            "one": "%{count} %{state} item",
            "other": "%{count} %{state} items"
          }
        },
        "jump_to_feed": "Aller au fil...",
        "moderated_by": "Moderated By",
        "no_state_content": {
          "active": "No active content",
          "denied": "No denied content",
          "expired": "No expired content",
          "future": "No future content",
          "generic": "No %{state} content"
        },
        "no_sub_feeds": "pas de sous fil ",
        "sub_feeds": "Sous fil :",
        "submissions_pending": {
          "one": "%{count} item en attente de votre modération",
          "other": "%{count} items en attente de votre modération"
        },
        "submit_something": "poster quelque chose",
        "subscribed_to_screens": "Subscribed to Screens",
        "to_make_this_feed_happy": "pour faire de ce fil un endroit plus heureux ?",
        "toggle_content_states_to_display": "Toggle content states to display...",
        "type_to_filter": "Type here to filter",
        "would_you_kindly": "Pourriez vous gentillement"
      },
      "index_header": {
        "all_feeds": "Tous les fils",
        "delete_feed": "Supprimer le fil",
        "edit_feed": "Editer le fil",
        "moderated_by": "Ce fil est modéré par"
      },
      "moderate_title": "Modéré %{name}",
      "show_body": {
        "also_appears_on": "Aussi posté sur ...",
        "approve_this_content": "Approuver ce contenu",
        "approved": "Approuvé",
        "deny_this_content": "Refuser ce contenu"
      },
      "show_header": {
        "all_feeds": "Tous les fils"
      },
      "submission_listgriditem": {
        "change_to_approved": "Changer en approuvé",
        "change_to_denied": "Changer en refusé",
        "currently": "actuellement",
        "date_range": "%{start} à %{end}",
        "moderate": "Modéré...",
        "urgent": "Urgent",
        "urgent_tooltip": "Hey! Ce post devrait déjà avoir démarré et vous devriez peut-êtres le modérer."
      },
      "submission_tile": {
        "approve_this_content": "Approuver ce post",
        "deny_this_content": "Refuser ce post",
        "has_been_approved": "This content has been approved.",
        "has_been_denied": "This content has been denied."
      }
    },
    "subscription_created": "L'inscription a bien été créée.",
    "subscription_updated": "L'inscription a bien été mise à jour.",
    "subscriptions": {
      "approved_content": {
        "one": "%{count} item approuvé",
        "other": "%{count} items approuvés"
      },
      "index": {
        "add_a_new_feed": "ajouter un nouveau fil",
        "field": "champ",
        "field_custom_configurations": "Configuration du champ personalisée",
        "make_changes": "Faites d'abord des changements avant de sauvegarder.",
        "manage_model_for_field": "Gérer %{model} pour le champ %{name}",
        "no_configuration_yet": "Ce champs n'a pas de configuration.",
        "save_changes_to_model": "Sauvegarder les changements de %{model}",
        "search_and_find_a_feed_to_add": "Rechercher un fil à ajouter",
        "subscriptions": "Abonnement"
      },
      "records_created": "Abonnement créé",
      "records_updated": "Les abonnements ont été sauvegardé pour ce champs de votre écran.",
      "show": {
        "back": "Back",
        "edit": "Edit",
        "feed": "Feed:",
        "field": "Field:",
        "screen": "Screen:",
        "weight": "Weight:"
      },
      "shown_frequently": "Affiché fréquemment",
      "shown_rarely": "Affcihé rarement"
    },
    "support": {
      "array": {
        "last_word_connector": " et ",
        "two_words_connector": " et ",
        "words_connector": ", "
      }
    },
    "template_created": "Le modèle a bien été créé.",
    "template_import_error": "Une erreur est apparue lors de l'importation du modèle. Assurez vous que le fichier XML est valide.",
    "template_import_requires_files": "Importer un modèle requière un fichier xml et une image.",
    "template_updated": "Le modèle a bien été mis à jour.",
    "templates": {
      "from_scratch": "Créer à partir du début",
      "import_existing": "Importer un modèle",
      "import_form": {
        "descriptor": "Ficher descripteur",
        "image": "Image",
        "package": "Archive (ZIP)"
      },
      "index_body": {
        "add_one": "en ajouter un",
        "author": "par",
        "no_templates_html": "Oups - Il n'y a pas de modèle. Pourquoi ne pas %{href} ?"
      },
      "new": {
        "invalid_xml": "Le fichier descripteur du modèle contient de l'XML invalide.",
        "template_import_requires_archive": "Vous devez spécifier une archive (ZIP) qui contient votre modèle.",
        "template_import_requires_image": "Il manque l'image de fond dans votre archive.",
        "template_import_requires_xml": "Il manque le fichier descripteur (XML) dans votre archive.",
        "template_import_requires_zip": "Le fichier sélectionné n'est pas une archive ZIP.",
        "template_method": "Template method:",
        "template_type": "Modèle %{type}"
      },
      "show_body": {
        "author": "Author",
        "preview_alt": "%{name} Preview",
        "usage": "Used by the following screens:"
      },
      "show_header": {
        "delete_template": "Delete Template",
        "edit_template": "Edit Template"
      },
      "template": {
        "by": "by %{author}"
      }
    },
    "time": {
      "am": "am",
      "formats": {
        "date": "%D",
        "date_long_year": "%d/%m/%Y",
        "date_time": "%D, %l:%M %p",
        "default": "%d %B %Y %Hh %Mmin %Ss",
        "long": "%A %d %B %Y %Hh%M",
        "long_day": "%A %B %e at %l:%m %p",
        "month_day": "%m/%d",
        "short": "%d %b %Hh%M",
        "short_date": "%a %D",
        "short_day": "%a %b %d %Y",
        "short_month": "%b %d",
        "time_date": "%I:%M %p on %D",
        "twelve_hour_time": "%I:%M %P"
      },
      "pm": "pm"
    },
    "unrecognized_type": "Unrecognized content type.",
    "update_model": "Mettre � jour %{model}",
    "user_created": "L'utilisateur a bien été créé.",
    "user_not_created": "L'utilisateur n'a pas été créé.",
    "user_not_deletable": "Un utilisateur qui est le dernier administrateur ou qui possède un écran ne peut pas être supprimé.",
    "user_owns_screens": "Cet utilisateur ne peut être supprimé car il possède un ou plusieur écran(s).",
    "user_updated": "L'utilisateur a bien été mis à jour.",
    "users": {
      "all_users": "Tous les utilisateurs",
      "change_password": "Changer le mot de passe",
      "form": {
        "email_label": "user@domain.com",
        "first_label": "Premier",
        "last_label": "Dernier",
        "options": "Options",
        "provide_details": "Description"
      },
      "index": {
        "denied": "Refusé",
        "leader": "Chef",
        "moderator": "Moderator",
        "name": "Name",
        "pending": "Pending",
        "system_admin": "administrateur"
      },
      "show_body": {
        "admin": "Admin",
        "content": "Contenu",
        "content_header": {
          "one": "A envoyé un item",
          "other": "A envoyé %{count} items"
        },
        "dont_receive_emails": "Ne pas recevoir les mails",
        "forever": "Pour toujours",
        "group_header": {
          "one": "Appartient à un groupe",
          "other": "Appartient à %{count} groupes"
        },
        "groups": "Groupes",
        "leader": "L'utilisateur est chef d'au moins un groupe",
        "my": "Mon",
        "name": "Nom",
        "receive_emails": "Recevoir les mails",
        "roles": "Rôles",
        "screen_header": {
          "one": "Gère un écran",
          "other": "Gère %{count} écrans"
        },
        "screens": "Ecrans",
        "system_wide_admin": "Cet utilisateur est administrateur",
        "this_is_you": "C'est vous."
      }
    },
    "valid_git": "is not a valid git repository",
    "views": {
      "pagination": {
        "first": "&laquo; Premier",
        "last": "Dernier &raquo;",
        "next": "Suivant &rsaquo;",
        "previous": "&lsaquo; Précédent",
        "truncate": "&hellip;"
      }
    },
    "wont_write_restart_txt": "Concerto ne peut pas redémarrer le serveur. Redémarrez le manuellement.",
    "yes": "Yes"
  },
  "he": {
    "actions": "פעולות",
    "active_content": "תוכן פעיל",
    "add": "הוספה",
    "add_model": "הוספת %{model}",
    "all_model": "כל %{model}",
    "approve": "אישור",
    "approved": "מאושר",
    "are_you_sure": "האם אתה בטוח?",
    "are_you_sure_delete_model_key": "האם אתה בטוחה שאתה רוצה למחוק %{model} \"%{key}\"?",
    "are_you_sure_demote_user": "האם אתה בטוח שאתה רוצה להוריד בדרגה את \"%{user}\"?",
    "are_you_sure_leave_group": "האם אתה בטוח שאתה רוצה לצאת מ \"%{group}\"?",
    "are_you_sure_remove_model_key": "האם אתה בטוח שאתה רוצה להסיר את %{model} \"%{key}\"?",
    "are_you_sure_remove_user_group": "האת אתה בטוח שאתה רוצה להסיר את משתמש \"%{user}\" מקבוצה \"%{group}\"?",
    "back": "חזרה",
    "bad_request": "בקשה לא תקינה.",
    "cancel": "ביטול",
    "cant_be_blank": "לא ניתן להשאיר ריק",
    "cant_be_this_feed": "cant be this feed",
    "concerto": "קונצרטו",
    "content_deleted": "תוכן נמחק בהצלחה.",
    "content_expired_mod": "תוקפו של התוכן פג לפני שהתבצע פיקוח",
    "content_refreshed": "תוכן רוענן בהצלחה.",
    "create_model": "יצירת %{model}",
    "current_model": "%{model} נוכחי",
    "date": {
      "abbr_day_names": [
        "א",
        "ב",
        "ג",
        "ד",
        "ה",
        "ו",
        "ש"
      ],
      "abbr_month_names": [
        null,
        "ינו",
        "פבר",
        "מרץ",
        "אפר",
        "מאי",
        "יונ",
        "יול",
        "אוג",
        "ספט",
        "אוק",
        "נוב",
        "דצמ"
      ],
      "day_names": [
        "ראשון",
        "שני",
        "שלישי",
        "רביעי",
        "חמישי",
        "שישי",
        "שבת"
      ],
      "formats": {
        "default": "%d-%m-%Y",
        "long": "%e ב%B, %Y",
        "short": "%e %b"
      },
      "month_names": [
        null,
        "ינואר",
        "פברואר",
        "מרץ",
        "אפריל",
        "מאי",
        "יוני",
        "יולי",
        "אוגוסט",
        "ספטמבר",
        "אוקטובר",
        "נובמבר",
        "דצמבר"
      ],
      "order": [
        "day",
        "month",
        "year"
      ]
    },
    "datetime": {
      "distance_in_words": {
        "about_x_hours": {
          "one": "בערך שעה אחת",
          "other": "בערך %{count} שעות"
        },
        "about_x_months": {
          "one": "בערך חודש אחד",
          "other": "בערך %{count} חודשים"
        },
        "about_x_years": {
          "one": "בערך שנה אחת",
          "other": "בערך %{count} שנים"
        },
        "almost_x_years": {
          "one": "כמעט שנה",
          "other": "כמעט %{count} שנים"
        },
        "half_a_minute": "חצי דקה",
        "less_than_x_minutes": {
          "one": "פחות מדקה אחת",
          "other": "פחות מ- %{count} דקות",
          "zero": "פחות מדקה אחת"
        },
        "less_than_x_seconds": {
          "one": "פחות משניה אחת",
          "other": "פחות מ- %{count} שניות",
          "zero": "פחות משניה אחת"
        },
        "over_x_years": {
          "one": "מעל שנה אחת",
          "other": "מעל %{count} שנים"
        },
        "x_days": {
          "one": "יום אחד",
          "other": "%{count} ימים"
        },
        "x_minutes": {
          "one": "דקה אחת",
          "other": "%{count} דקות"
        },
        "x_months": {
          "one": "חודש אחד",
          "other": "%{count} חודשים"
        },
        "x_seconds": {
          "one": "שניה אחת",
          "other": "%{count} שניות"
        }
      },
      "prompts": {
        "day": "יום",
        "hour": "שעה",
        "minute": "דקה",
        "month": "חודש",
        "second": "שניות",
        "year": "שנה"
      }
    },
    "deny": "לא אושר",
    "destroy": "מחיקה",
    "destroy_model": "מחיקת %{model}",
    "devise": {
      "confirmations": {
        "confirmed": "חשבונך אושר בהצלחה. כעת הנך מחובר/ת.",
        "send_instructions": "בדקות הקרובות יגיע אליך אימייל עם הנחיות כיצד לאשר את הרשמתך.",
        "send_paranoid_instructions": "אם האימייל שלך נמצא במאגר נתונים שלנו, נשלח לך אימייל עם הוראות כיצד לאשר את החשבון שלך בעוד כמה דקות."
      },
      "failure": {
        "already_authenticated": "את/ה כבר מחובר/ת",
        "inactive": "חשבונך טרם הופעל.",
        "invalid": "כתובת אימייל או סיסמא שגויה.",
        "last_attempt": "יש לך עוד ניסיון אחד לפני שהחשבון שלך ינעל.",
        "locked": "חשבונך ננעל.",
        "not_found_in_database": "כתובת אימייל או סיסמא לא תקינה",
        "timeout": "פג תוקף החיבור לאתר, אנא התחבר מחדש.",
        "unauthenticated": "עליך להתחבר או להרשם על-מנת להמשיך.",
        "unconfirmed": "עליך לאשר את הרשמתך לפני שתוכל להמשיך."
      },
      "mailer": {
        "confirmation_instructions": {
          "subject": "הוראות לאישור הרשמה"
        },
        "reset_password_instructions": {
          "subject": "הוראות לאיפוס סיסמא"
        },
        "unlock_instructions": {
          "subject": "הוראות להסרת נעילה"
        }
      },
      "omniauth_callbacks": {
        "failure": "לא הצלחנו לאמת את זהותך מסוג %{kind} בגלל \"%{reason}\"",
        "success": null
      },
      "passwords": {
        "no_token": "אינך יכול/ה לגשת לעמוד זה אם לא הופנת מאימייל לשינוי סיסמא. אם את/ה כן מגיע משם, אנא ודא/י שהשתמשת בכתובת אינטרנט המלאה.",
        "send_instructions": "בדקות הקרובות יגיע אליך אימייל עם הנחיות כיצד לאפס את סיסמתך.",
        "send_paranoid_instructions": "אם האימייל שלך קיים במאגר, אנו נשלח לך לינק לחידוש סיסמא באימייל.",
        "updated": "סיסמתך שונתה בהצלחה. כעת הנך מחובר/ת.",
        "updated_not_active": "הסיסמא שלך שונתה בהצלחה."
      },
      "registrations": {
        "destroyed": "חשבונך נמחק בהצלחה. מקווים לראותך בעתיד.",
        "signed_up": "נרשמת בהצלחה. אם נדרש, יישלח אליך אימייל לאישור הרשמתך.",
        "signed_up_but_inactive": "ההרשמה בוצעה בהצלחה, אך לא יכולנו להכניס אותך למערכת מכיוון שעוד לא הפעלת את חשבונך",
        "signed_up_but_locked": "ההרשמה בוצעה בהצלחה, אך לא יכולנו להכניס אותך למערכת מכיוון שחשבונתך נעול.",
        "signed_up_but_unconfirmed": "הודעה עם לינק לאישור חשבונך נשלח לאימייל שלך. אנא פתח/י את הלינק על מנת להפעיל את חשבונך.",
        "update_needs_confirmation": "עידכנת את חשבונך בהצלחה, אבל אנחנו צריכים לאשר את האימייל החדש שלך. אנא בדק/י את האימייל שלך ולחצ/י על הלינק על מנת לאשר את חשבון האימייל החדש.",
        "updated": "עדכנת בהצלחה את חשבונך."
      },
      "sessions": {
        "signed_in": "התחברת בהצלחה",
        "signed_out": "התנתקת בהצלחה."
      },
      "unlocks": {
        "send_instructions": "בדקות הקרובות יישלח אליך אימייל עם הנחיות כיצד להסיר את הנעילה מחשבונך.",
        "send_paranoid_instructions": "אם חשבונך קיים, את/ה תקבל/י אימייל עם הוראות כיצד להפעיל מחדש את חשבונך.",
        "unlocked": "הנעילה הוסרה בהצלחה. כעת הנך מחובר/ת."
      }
    },
    "edit": "עריכה",
    "edit_model": "עריכת %{model}",
    "error": {
      "one": "שגיאה",
      "other": "שגיאה"
    },
    "error_refreshing": "שגיאה ברענון.",
    "errors": {
      "format": "%{attribute} %{message}",
      "messages": {
        "accepted": "חייב באישור",
        "already_confirmed": "כבר אושר. אני נסה להיכנס למערכת.",
        "blank": "לא יכול להיות ריק",
        "confirmation": "לא תואם לאישורו",
        "confirmation_period_expired": null,
        "empty": "לא יכול להיות ריק",
        "equal_to": "חייב להיות שווה ל- %{count}",
        "even": "חייב להיות זוגי",
        "exclusion": "לא זמין",
        "expired": "פג תוקף, אנא בקש אחד חדש.",
        "greater_than": "חייב להיות גדול מ- %{count}",
        "greater_than_or_equal_to": "חייב להיות גדול או שווה ל- %{count}",
        "inclusion": "לא נכלל ברשימה",
        "invalid": "לא תקין",
        "less_than": "חייב להיות קטן מ- %{count}",
        "less_than_or_equal_to": "חייב להיות קטן או שווה ל- %{count}",
        "not_a_number": "חייב להיות מספר",
        "not_an_integer": "חייב להיות מספר שלם",
        "not_found": "לא נמצא.",
        "not_locked": "לא היה נעול.",
        "not_saved": {
          "one": "שגיאה אחת מנעה את ה%{resource} מלהישמר:",
          "other": "%{count} שגיאות מנעו מ%{resource} מלהישמר:"
        },
        "odd": "חייב להיות אי זוגי",
        "record_invalid": "האימות נכשל: %{errors}",
        "taken": "כבר בשימוש",
        "too_long": "ארוך מדי (יותר מ- %{count} תווים)",
        "too_short": "קצר מדי (פחות מ- %{count} תווים)",
        "wrong_length": "לא באורך הנכון (חייב להיות %{count} תווים)"
      },
      "template": {
        "body": "אנא בדוק את השדות הבאים:",
        "header": {
          "one": "לא ניתן לשמור את ה%{model}: שגיאה אחת",
          "other": "לא ניתן לשמור את ה%{model}: %{count} שגיאות."
        }
      }
    },
    "failed": "נכשל",
    "false": "לא",
    "file_is": "הקובץ",
    "file_is_required": "הקובץ נדרש",
    "gem_not_found": "לא תקף rubygem",
    "gemspec_not_found": "Gemspec לא נמצא",
    "helpers": {
      "select": {
        "prompt": "נא לבחור"
      },
      "submit": {
        "create": "יצירת %{model}",
        "submit": "שמור %{model}",
        "update": "עדכון %{model}"
      }
    },
    "import_model": "ייבוא %{model}",
    "is_submittable": "ניתן להגשה",
    "is_viewable": "ניתן לצפייה",
    "join": "הצטרפות",
    "manage_model": "ניהול %{model}",
    "membership_approved": "מאושר",
    "membership_denied": "נדחה",
    "my_model": "%{model}שלי",
    "new_model": "%{model} חדש",
    "not_file_support": "אינו פורמט בו אנו תומכים",
    "number": {
      "currency": {
        "format": {
          "delimiter": ",",
          "format": "%u %n",
          "precision": 2,
          "separator": ".",
          "significant": false,
          "strip_insignificant_zeros": false,
          "unit": "₪"
        }
      },
      "format": {
        "delimiter": ",",
        "precision": 3,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false
      },
      "human": {
        "decimal_units": {
          "format": "%n %u",
          "units": {
            "billion": "מיליארד",
            "million": "מיליון",
            "quadrillion": "קודריליון",
            "thousand": "אלף",
            "trillion": "טריליון",
            "unit": ""
          }
        },
        "format": {
          "delimiter": "",
          "precision": 3,
          "significant": true,
          "strip_insignificant_zeros": true
        },
        "storage_units": {
          "format": "%n %u",
          "units": {
            "byte": {
              "one": "בייט",
              "other": "בתים"
            },
            "gb": "ג'יגה-בייט",
            "kb": "קילו-בייט",
            "mb": "מגה-בייט",
            "tb": "טרה-בייט"
          }
        }
      },
      "percentage": {
        "format": {
          "delimiter": ""
        }
      },
      "precision": {
        "format": {
          "delimiter": ""
        }
      }
    },
    "other_model": "%{model} אחר",
    "pending": "המתן",
    "preview": "תצוגה מקדיה",
    "prohibited_save": "מנע מ%{model} מלהישמר:",
    "rejected": "נדחה",
    "remove_model": "הסרת %{model}",
    "screens": {
      "show_body": {
        "field_settings": {
          "one": "הגדרת שדה",
          "other": "הגדרות שדה"
        },
        "view_field_settings": "העבר את העכבר מעל שדה שלהלן כדי להציג את ההגדרות שלו."
      }
    },
    "show": "הופעה",
    "sorry_access": "אין לך גישה לביצוע פעולה זו.",
    "status": "סטטוס",
    "support": {
      "array": {
        "last_word_connector": ", את ",
        "two_words_connector": " את ",
        "words_connector": ", "
      }
    },
    "time": {
      "am": "am",
      "formats": {
        "date": "%D",
        "date_long_year": "%m/%d/%Y",
        "date_time": "%D, %l:%M %p",
        "default": "%a %d %b %H:%M:%S %Z %Y",
        "long": "%d ב%B, %Y %H:%M",
        "long_day": "%A %B %e at %l:%m %p",
        "month_day": "%m/%d",
        "short": "%d %b %H:%M",
        "short_date": "%a %D",
        "short_day": "%a %b %d %Y",
        "short_month": "%b %d",
        "time_date": "%I:%M %p on %D",
        "twelve_hour_time": "%I:%M %P"
      },
      "pm": "pm"
    },
    "type_to_filter": "הקלד כאן לסינון",
    "unauthorized": {
      "create": {
        "all": "אינך מאושר ליצור %{subject}."
      },
      "delete": {
        "all": "אינך מאושר למחוק %{subject}."
      },
      "read": {
        "all": "אינך מאושר לקרוא %{subject}."
      },
      "update": {
        "all": "אינך מאושר לעדכן %{subject}."
      }
    },
    "update_model": "עידכון %{model}",
    "valid_git": "איננו git repository תקף"
  },
  "nl": {
    "actions": "Actions",
    "activerecord": {
      "attributes": {
        "concerto_config": {
          "allow_registration": "Sta open registratie gebruikers toe",
          "allow_user_feed_creation": "Sta toe dat gebruikers feeds aanmaken",
          "allow_user_screen_creation": "Sta toe dat gebruikers schermen aanmaken",
          "analytics_enabled": "Google Analytics enabled",
          "analytics_property_id": "Google Web Property ID (API Key)",
          "autostart_delayed_job": "Start uitgestelde taken daemon uutomatisch",
          "confirmable": "Users must confirm their accounts ",
          "content_default_end_time": "Standaard eindtijd voor inhoud",
          "content_default_start_time": "Standaard begintijd voor inhoud",
          "default_content_duration": "Default Content Duration",
          "default_content_run_time": "Standaard looptijd inhoud (in dagen)",
          "default_upload_type": "Standaard inhoud uploadtype",
          "dynamic_refresh_time": "Dynamisch verversinterval",
          "footer_html": "Footer HTML",
          "http_proxy_settings": "Http Proxy Settings",
          "keep_activity_log": "Keep Activity Log",
          "mailer_from": "Mailer From",
          "mailer_host": "Concerto Server Name (FQDN)",
          "mailer_protocol": "Mailer Protocol",
          "max_content_duration": "Max Content Duration (in seconds)",
          "min_content_duration": "Minimum duur inhoud (in seconden)",
          "motd_html": "'Message of the Day' HTML",
          "openssl_verify_mode_none": "No SMTP SSL Certificate Verification",
          "poll_interval": "Hardware player polling interval",
          "public_concerto": "Publieke Concerto toegang",
          "rubygem_executable": "Rubygem Executable",
          "setup_complete": "Instellen Concerto voltooid",
          "smtp_address": "SMTP Server",
          "smtp_auth_type": "SMTP Authentication Type",
          "smtp_password": "SMTP Password",
          "smtp_port": "SMTP Port",
          "smtp_username": "SMTP Username",
          "start_date_offset": "Tijd tussen indienen en begin inhoud",
          "system_time_zone": "System Time Zone",
          "use_frontend_to_trigger_cron": "Schakel cron in via frontend"
        },
        "concerto_plugin": {
          "enable": "Enable Gem?",
          "gem_name": "Gem Name",
          "gem_version": "Gem Version",
          "source": "Source",
          "source_url": "Source URL"
        },
        "content": {
          "duration": "Display Duration",
          "end_time": "End Time",
          "name": "Name",
          "start_time": "Start Time"
        },
        "field_config": {
          "key": "Key",
          "value": "Value"
        },
        "group": {
          "name": "Name",
          "narrative": "Group Description",
          "new_leader": "New Leader"
        },
        "kind": {
          "actions": "Actions",
          "name": "Name"
        },
        "position": {
          "bottom": "Bottom",
          "field": "Field",
          "left": "Left",
          "right": "Right",
          "style": "Style",
          "top": "Top"
        },
        "screen": {
          "is_public": "This screen is publicly viewable",
          "location": "Location",
          "name": "Name",
          "owner": "Owner",
          "owner_id": "Owned By",
          "template_id": "Template"
        },
        "submission": {
          "duration": "Duration",
          "moderation_reason": "Reason"
        },
        "template": {
          "author": "Author",
          "is_hidden": "Hidden?",
          "name": "Name"
        },
        "user": {
          "actions": "Actions",
          "email": "Email",
          "first_name": "First Name",
          "is_admin": "Admin Status",
          "last_name": "Last Name",
          "locale": "Locale",
          "password": "Password",
          "password_confirmation": "Confirm Password",
          "receive_moderation_notifications": "Receive Moderation Notifications",
          "time_zone": "Time Zone"
        }
      },
      "models": {
        "client_time": {
          "one": "Client Time",
          "other": "Client Times"
        },
        "concerto_plugin": {
          "one": "Plugin",
          "other": "Plugins"
        },
        "content": {
          "one": "Content",
          "other": "Contents"
        },
        "feed": {
          "one": "Feed",
          "other": "Feeds"
        },
        "field_config": {
          "one": "Config Parameter",
          "other": "Config Parameters"
        },
        "graphic": {
          "one": "Graphic",
          "other": "Graphics"
        },
        "group": {
          "one": "Group",
          "other": "Groups"
        },
        "html_text": {
          "one": "HTML Text",
          "other": "HTML Texts"
        },
        "kind": {
          "one": "Kind",
          "other": "Kinds"
        },
        "position": {
          "one": "Position",
          "other": "Positions"
        },
        "screen": {
          "one": "Screen",
          "other": "Screens"
        },
        "submission": {
          "one": "Submission",
          "other": "Submissions"
        },
        "subscription": {
          "one": "Subscription",
          "other": "Subscriptions"
        },
        "template": {
          "one": "Template",
          "other": "Templates"
        },
        "ticker": {
          "one": "Text",
          "other": "Texts"
        },
        "user": {
          "one": "User",
          "other": "Users"
        }
      }
    },
    "activities": {
      "show": {
        "latest_activity": "Latest Activity"
      }
    },
    "activity_mailer": {
      "submission_update": {
        "approved": "approved",
        "content_schedule": "The content is scheduled to begin showing on %{start} and end on %{end}. It will be shown for %{duration} seconds.",
        "denied": "denied",
        "feed": "feed",
        "for_the": "for the",
        "moderator": "Moderator",
        "moderator_text": "moderator %{moderator} %{status} %{content_name} for the %{feed} feed",
        "reason_rejected": "The reason provided for the rejection is: %{reason}",
        "your_concerto_submission": "Your Concerto Submission %{content_name} has been %{status}"
      }
    },
    "add": "Toevoegen",
    "add_model": "%{model} toevoegen",
    "all_model": "Alle %{model}",
    "approve": "Goedkeuren",
    "approved": "Approved",
    "are_you_sure": "Ben je zeker?",
    "are_you_sure_delete_model_key": "Are you sure you want to delete %{model} \"%{key}\"?",
    "are_you_sure_demote_user": "Are you sure you want to demote user \"%{user}\"?",
    "are_you_sure_leave_group": "Are you sure you want to leave the group \"%{group}\"?",
    "are_you_sure_remove_model_key": "Are you sure you want to remove %{model} \"%{key}\"?",
    "are_you_sure_remove_user_group": "Are you sure you want to remove user \"%{user}\" from group \"%{group}\"?",
    "asset_precomp_failed": "Asset precompilation failed. Please make sure the command rake assets:precompile works.",
    "back": "Terug",
    "bad_request": "Bad request.",
    "bundle_error": "Fout bij installeren van de bundle.",
    "cancel": "Annuleren",
    "cannot_delete_last_admin": "Kan de laatste beheerder niet verwijderen.",
    "cannot_delete_template": "Kan sjabloon niet verwijderen. Het heeft een of meer schermen an zich gelinkt.",
    "cant_be_blank": "cant be blank",
    "cant_be_this_content": "cant be this content",
    "cant_be_this_feed": "cant be this feed",
    "cant_write_restart_txt": "Fout bij herstarten van de webserver. Herstart manueel a.u.b.",
    "concerto": "Concerto",
    "concerto_config": {
      "config_check": {
        "configuration_check": "Configuration Check",
        "file_permissions": "Necessary File Permissions",
        "performance": "Performance",
        "security": "Security",
        "software_prerequisites": "Software Prerequisites"
      },
      "show": {
        "check_configuration": "Check Configuration",
        "edit_settings": "Edit Global Settings",
        "global_settings": "Global Settings",
        "restart_confirm": "Restarting the webserver may take a 10 to 20 seconds. Are you sure you'd like to restart?",
        "restart_webserver": "Restart Webserver",
        "save_settings": "Save Settings"
      }
    },
    "concerto_plugins": {
      "edit": {
        "prohibited_plugin_save": "prohibited plugin save"
      },
      "index": {
        "disabled": "disabled",
        "disabled_msg": "This plugin is currently disabled.",
        "enabled": "enabled",
        "enabled_msg": "This plugin is currently enabled.",
        "gem_description": "Description",
        "status": "Status"
      },
      "new": {
        "install_plugin": "Install Plugin",
        "path_instructions": "This should be a path to a directory or file location for the plugin. Please note that on Mac OS X, directories inserted into /var/www/ should be prefixed with /private.",
        "source_url": "Source URL"
      },
      "show": {
        "enabled": "Enabled:",
        "gem_name": "Gem name:",
        "gem_version": "Gem version:",
        "installed": "Installed:",
        "installed_no": "No",
        "installed_yes": "Yes",
        "locked": "(Locked)",
        "source": "Source:",
        "source_url": "Source url:",
        "unknown": "Unknown",
        "upgrade": "Upgrade",
        "upgrade_available": "(Upgrade available to %{version})",
        "visit_plugin_website": "Visit plugin website"
      },
      "sources": {
        "git": "Git Repository",
        "path": "Filesystem Path",
        "rubygems": "RubyGems"
      }
    },
    "content_approved": "Inhoud goedgekeurd.",
    "content_created": "Inhoud maken geslaagd.",
    "content_created_no_feeds": "Inhoud maken geslaagd. Omdat geen feeds werden opgegeven, zal de inhoud in limbo blijven.",
    "content_deleted": "Content successfully deleted.",
    "content_denied": "Inhoud geweigerd.",
    "content_expired_mod": "Content expired before moderation could occur.",
    "content_failed_approve": "Inhoud niet goedgekeurd.",
    "content_failed_deny": "Inhoud niet geweigerd.",
    "content_failed_moderation": "Inhoud niet gemodereerd.",
    "content_moderated": "Inhoud gemodereerd.",
    "content_not_found": "Content not found.",
    "content_refreshed": "Content successfully refreshed.",
    "content_updated": "Inhoud aanpassen geslaagd.",
    "contents": {
      "dynamic_content_tools": {
        "force_update": "Force Update",
        "owner_tools": "Owner Tools",
        "purge_children": "Purge Children"
      },
      "edit": {
        "edit_content": "Edit %{type} Content"
      },
      "form": {
        "preview": "Preview",
        "provide_details": "Provide Basic Details",
        "select_content_type": "Select Content Type to Add",
        "select_feed": "Select Feed"
      },
      "form_bottom": {
        "submit_content": "Submit Content"
      },
      "form_elements": {
        "dates": {
          "finish_displaying": "Finish Displaying",
          "set_specific_times": "Set specific times",
          "start_displaying": "Start Displaying"
        },
        "duration": {
          "change": "Change",
          "second": {
            "one": "%{count} second",
            "other": "%{count} seconds"
          },
          "show_on_screen": "Show on Screen"
        },
        "feeds": {
          "filter_feeds": "Filter Feeds",
          "no_feeds": "No feeds have been selected yet for this submission.",
          "select_a_feed": "Select a feed",
          "type_to_filter": "Type here to filter"
        },
        "selected_feed_display": {
          "appears_on_screens": "Appears on %{screens_count} screens"
        }
      },
      "form_top": {
        "data": "Data"
      },
      "graphic": {
        "form_top": {
          "accepted_filetypes": "Accepted Filetypes",
          "specify_file": "Specify File",
          "upload_graphic": "Upload Graphic"
        },
        "js": {
          "preview": "Preview..."
        }
      },
      "index": {
        "active": "Hide expired & future content?",
        "browse_content": "Browse Concerto Content",
        "browse_content_by_feed": "Browse Content by Feed",
        "browse_content_by_screen": "Find Content on a Particular Screen",
        "content_search": "Content Search",
        "contents_search": "Concerto Content",
        "feed": "Feed",
        "filtered_content": "Filtered Content",
        "screen": "Screen",
        "search": "Search",
        "type": "Type",
        "user": "User"
      },
      "new": {
        "add_content": "Add %{type} Content",
        "content": "Content",
        "content_type": "Content type to add:",
        "design_graphic": "Design a Graphic",
        "select_type": "Select Type"
      },
      "provide_details": "Provide Details",
      "show": {
        "display_from": "Display From",
        "display_until": "Display Until",
        "feeds_moderation_status": "Submission Status",
        "not_submitted": "This content has not been submitted to any feeds.",
        "submitted_by": "Submitted by",
        "the_dawn_of_time": "The Dawn of Time.",
        "the_end_of_time": "The End of Time."
      },
      "show_details": {
        "content_resubmission": "Content Resubmission",
        "display_from": "Display From",
        "display_until": "Display Until",
        "duration": "Duration",
        "feeds_moderation_status": "Submission Status",
        "not_submitted": "This content has not been submitted to any feeds.",
        "seconds": "seconds",
        "submitted_by": "Submitted by",
        "the_dawn_of_time": "The Dawn of Time.",
        "the_end_of_time": "The End of Time."
      },
      "submit_to_feeds": "Submit to Feeds",
      "table": {
        "description": "Description",
        "link": "Link",
        "submitted": "Submitted",
        "title": "Title",
        "updated": "Updated"
      },
      "ticker": {
        "form_top": {
          "allowed_html": [
            "on markdown can be found at http://wikipedia.org/wiki/Markdown."
          ],
          "characters": "Characters",
          "display_format": "Display Format",
          "display_format_tip": "The ticker display format is used for a smaller amount of text usually along the bottom of the screen.  The text display format is used for major text and usually appears where weather and rss feeds appear.",
          "markdown_allowed": "Some markdown or HTML is allowed in this field ",
          "preview": "Preview",
          "ticker_text": "Ticker Text",
          "type_your_message": "Type Your Message"
        }
      }
    },
    "create_model": "%{model} aanmaken",
    "dashboard": {
      "admin_stats": {
        "backup": "Backup",
        "cant_determine_latest_version": "Unable to determine latest available version.",
        "concerto_version": "Concerto Version:",
        "delayed_job_status": "Background Job Engine:",
        "new_version": "A new version (%{version}) is now available.",
        "restart_webserver": "Restart Webserver",
        "running": "Running",
        "start_stop": "How to Start/Stop",
        "stopped": "Stopped",
        "system_info": "System Information",
        "user_stats": "User Stats:"
      },
      "browse": {
        "submissions_to_moderate": {
          "one": "You have %{count} submission to moderate",
          "other": "You have %{count} submissions to moderate"
        }
      },
      "global_preferences": "Global Settings",
      "latest_activity": {
        "more": "More"
      },
      "list_activities": {
        "latest_activity": "Latest Activity"
      },
      "network": {
        "groups": "Groups",
        "no_membership": "You are not yet a member of any group.",
        "screens": "Screens",
        "your_network": "Your Network"
      },
      "vitals": {
        "active": "active",
        "active_content": {
          "one": "active %{content}",
          "other": "active %{content}"
        },
        "network_vitals": "Network Vitals",
        "offline": "offline"
      }
    },
    "date": {
      "abbr_day_names": [
        "zo",
        "ma",
        "di",
        "wo",
        "do",
        "vr",
        "za"
      ],
      "abbr_month_names": [
        null,
        "jan",
        "feb",
        "mrt",
        "apr",
        "mei",
        "jun",
        "jul",
        "aug",
        "sep",
        "okt",
        "nov",
        "dec"
      ],
      "day_names": [
        "zondag",
        "maandag",
        "dinsdag",
        "woensdag",
        "donderdag",
        "vrijdag",
        "zaterdag"
      ],
      "formats": {
        "default": "%d-%m-%Y",
        "long": "%e %B %Y",
        "short": "%e %b"
      },
      "month_names": [
        null,
        "januari",
        "februari",
        "maart",
        "april",
        "mei",
        "juni",
        "juli",
        "augustus",
        "september",
        "oktober",
        "november",
        "december"
      ],
      "order": [
        "day",
        "month",
        "year"
      ]
    },
    "datetime": {
      "distance_in_words": {
        "about_x_hours": {
          "one": "ongeveer een uur",
          "other": "ongeveer %{count} uur"
        },
        "about_x_months": {
          "one": "ongeveer een maand",
          "other": "ongeveer %{count} maanden"
        },
        "about_x_years": {
          "one": "ongeveer een jaar",
          "other": "ongeveer %{count} jaar"
        },
        "almost_x_years": {
          "one": "bijna een jaar",
          "other": "bijna %{count} jaar"
        },
        "half_a_minute": "een halve minuut",
        "less_than_x_minutes": {
          "one": "minder dan een minuut",
          "other": "minder dan %{count} minuten"
        },
        "less_than_x_seconds": {
          "one": "minder dan een seconde",
          "other": "minder dan %{count} seconden"
        },
        "over_x_years": {
          "one": "meer dan een jaar",
          "other": "meer dan %{count} jaar"
        },
        "x_days": {
          "one": "1 dag",
          "other": "%{count} dagen"
        },
        "x_minutes": {
          "one": "1 minuut",
          "other": "%{count} minuten"
        },
        "x_months": {
          "one": "1 maand",
          "other": "%{count} maanden"
        },
        "x_seconds": {
          "one": "1 seconde",
          "other": "%{count} seconden"
        }
      },
      "prompts": {
        "day": "dag",
        "hour": "uur",
        "minute": "minuut",
        "month": "maand",
        "second": "seconde",
        "year": "jaar"
      }
    },
    "deny": "Weigeren",
    "destroy": "Verwijderen",
    "destroy_model": "Delete %{model}",
    "devise": {
      "confirmations": {
        "confirmed": "Je account is bevestigd, je bent nu ingelogd.",
        "new": {
          "header": "Resend Confirmation Instructions",
          "submit": "Resend confirmation instructions"
        },
        "send_instructions": "Je zal over een paar minuten een e-mail ontvangen met instructies over hoe je je account moet bevestigen.",
        "send_paranoid_instructions": "Als je e-mail bestaat in onze database, zal je over een paar minuten een e-mail ontvangen met instructies over hoe je je account moet bevestigen."
      },
      "failure": {
        "already_authenticated": "Je bent al ingelogd.",
        "inactive": "Je account is nog niet geactiveerd.",
        "invalid": "Ongeldig e-mail of wachtwoord.",
        "invalid_token": "Ongeldig authenticatie token.",
        "locked": "Je account is vergrendeld.",
        "not_found_in_database": "Ongeldig e-mail of wachtwoord.",
        "timeout": "Je sessie is verlopen, log alsjeblieft opnieuw in om verder te gaan.",
        "unauthenticated": "Je moet eerst inloggen of aanmelden, voordat je verder kunt gaan.",
        "unconfirmed": "Je moet eerst je account bevestigen, voordat je verder kunt gaan."
      },
      "mailer": {
        "confirmation_instructions": {
          "confirm_account_below": "You can confirm your account through the link below:",
          "confirm_my_account": "Confirm my account",
          "subject": "Bevestigingsinstructies",
          "welcome": "Welcome %{user}!"
        },
        "reset_password_instructions": {
          "change_my_password": "Change my password",
          "hello": "Hello %{user}!",
          "ignore_if_not_requested": "If you didn't request this, please ignore this email.",
          "password_wont_change": "Your password won't change until you access the link above and create a new one.",
          "request_link_to_change_password": "Someone has requested a link to change your password, and you can do this through the link below.",
          "subject": "Reset wachtwoord instructies"
        },
        "unlock_instructions": {
          "account_locked": "Your account has been locked due to an excessive amount of unsuccessful sign in attempts.",
          "click_to_unlock": "Click the link below to unlock your account:",
          "hello": "Hello %{user}!",
          "subject": "Ontgrendelinstructies",
          "unlock_my_account": "Unlock my account"
        }
      },
      "omniauth_callbacks": {
        "failure": "Kan je niet autoriseren van %{kind}, omdat \"%{reason}\".",
        "success": "Succesvol geautoriseerd met %{kind} account."
      },
      "passwords": {
        "edit": {
          "header": "Change Password",
          "new_password": "New password",
          "repeat_password": "Repeat password",
          "submit": "Change Password"
        },
        "new": {
          "header": "Forgot your password?",
          "submit": "Send Reset Instructions"
        },
        "no_token": "Je kan deze pagina niet bereiken als je geen e-mail hebt ontvangen met wachtwoord reset instructies. Mocht je dit wel hebben ontvangen kijk dan de URL na in je mail of vraag de instructies opnieuw aan.",
        "send_instructions": "Je zal over een paar minuten een e-mail ontvangen met instructies over hoe je je wachtwoord moet resetten.",
        "send_paranoid_instructions": "Als je e-mail bestaat in onze database, zal je over een paar minuten een e-mail ontvangen met instructies over hoe je je wachtwoord moet resetten.",
        "updated": "Je wachtwoord is succesvol aangepast, je bent nu ingelogd.",
        "updated_not_active": "Je wachtwoord is succesvol aangepast."
      },
      "registrations": {
        "destroyed": "Tot ziens! Je account is succesvol verwijderd.",
        "edit": {
          "change_password_for": "change password for",
          "confirm_password": "confirm password",
          "current_password": "Current password",
          "new_password": "new password"
        },
        "new": {
          "confirm_password": "Confirm Password",
          "header": "Register Account",
          "name": "Name",
          "submit": "Register Account"
        },
        "signed_up": "Welkom, u bent succesvol ingeschreven.",
        "signed_up_but_inactive": "Je bent succesvol ingeschreven, maar we kunnen je nog niet inloggen omdat je account nog niet is geactiveerd.",
        "signed_up_but_locked": "Je bent succesvol ingeschreven, maar we kunnen je nog niet inloggen omdat je account is geblokeerd.",
        "signed_up_but_unconfirmed": "Een e-mail met een bevestigings URL is verstuurd. Gebruik de URL om je account te activeren.",
        "update_needs_confirmation": "Je account is succesvol gewijzigd, echter hebben moet je nog wel je e-mail adres verifiëren.",
        "updated": "Je account is succesvol gewijzigd"
      },
      "sessions": {
        "form": {
          "remember_me": "Remember me",
          "sign_in": "Sign in"
        },
        "new": {
          "remember_me": "Remember me",
          "sign_in": "Sign in"
        },
        "signed_in": "Successvol ingelogd",
        "signed_out": "Succesvol uitgelogd"
      },
      "shared": {
        "links": {
          "forgot_password": "Forgot your password?",
          "no_confirmation_instructions": "Didn't receive confirmation instructions?",
          "no_unlock_instructions": "Didn't receive unlock instructions?",
          "register_account": "Register account",
          "sign_in": "Sign in",
          "sign_in_with": "Sign in with %{provider}"
        }
      },
      "unlocks": {
        "new": {
          "header": "Resend unlock instructions",
          "submit": "Resend unlock instructions"
        },
        "send_instructions": "Je zal over een paar minuten een e-mail ontvangen met instructies over hoe je je account moet ontgrendelen.",
        "send_paranoid_instructions": "Als je e-mail bestaat in onze database, zal je over een paar minuten een e-mail ontvangen met instructies over hoe je je account moet ontgrendelen.",
        "unlocked": "Je account is succesvol ontgrendeld. Log in om verder te gaan."
      }
    },
    "edit": "Bewerken",
    "edit_model": "%{model} bewerken",
    "elements": {
      "owner_select": {
        "no_users_found": "No users found.",
        "select_user": "Select a User...",
        "select_user_title": "Select a User",
        "type_to_filter": "Type to filter ..."
      },
      "topmenu_contents": {
        "accounts": "Accounts",
        "admin": "Admin",
        "backup": "Backup",
        "browse": "Browse",
        "configuration": "Configuration",
        "content": "Content",
        "dashboard_tooltip": "View the Concerto Dashboard",
        "groups": "Groups",
        "leader": "You are a leader of one or more groups",
        "log_out": "Log Out",
        "moderate": "Moderate",
        "network": "Network",
        "no_account": "No account?",
        "now": "now!",
        "plugins": "Plugins",
        "restart_webserver": "Restart Webserver",
        "return_home_msg": "Return home",
        "screens": "Screens",
        "settings": "Settings",
        "sign_in": "Sign In",
        "sign_up": "Register",
        "signin_login_spiel": "to upload and manage content.",
        "submissions_to_moderate": {
          "one": "You have %{count} submission to moderate",
          "other": "You have %{count} submissions to moderate"
        },
        "system_admin": "You are a system-wide admin",
        "templates": "Templates",
        "users": "Users",
        "users_and_groups": "User Groups"
      }
    },
    "error_refreshing": "Error refreshing.",
    "errors": {
      "error_404": {
        "abort": "Abort!",
        "content_not_found": "I'm afraid we're not in Kansas anymore.",
        "error_message": "The Concerto content you were looking for could not be found.\nSometimes a strategic retreat is the best option.\n"
      },
      "error_generic": {
        "abort": "Abort!",
        "error_message": "Something went wrong. Rest assured, you have been assigned 0% of the blame.",
        "reset_message": "Sometimes a strategic retreat is the best option."
      },
      "format": "%{attribute} %{message}",
      "messages": {
        "accepted": "moet worden geaccepteerd",
        "already_confirmed": "is al bevestigd, probeer in te loggen",
        "blank": "moet opgegeven zijn",
        "confirmation": "komt niet overeen met %{attribute}",
        "confirmation_period_expired": "moet worden bevestigd binnen %{period}, vraag een nieuwe aan",
        "empty": "moet opgegeven zijn",
        "equal_to": "moet gelijk zijn aan %{count}",
        "even": "moet even zijn",
        "exclusion": "is niet beschikbaar",
        "expired": "is verlopen, vraag een nieuwe aan",
        "greater_than": "moet groter zijn dan %{count}",
        "greater_than_or_equal_to": "moet groter dan of gelijk zijn aan %{count}",
        "inclusion": "is niet in de lijst opgenomen",
        "invalid": "is ongeldig",
        "less_than": "moet minder zijn dan %{count}",
        "less_than_or_equal_to": "moet minder dan of gelijk zijn aan %{count}",
        "not_a_number": "is geen getal",
        "not_an_integer": "moet een geheel getal zijn",
        "not_found": "niet gevonden",
        "not_locked": "is vergrendeld",
        "not_saved": {
          "one": "Een fout zorgde ervoor dat %{resource} niet kon worden opgeslagen:",
          "other": "%{count} fouten zorgde ervoor dat %{resource} niet kon worden opgeslagen:"
        },
        "odd": "moet oneven zijn",
        "other_than": "moet anders zijn dan %{count}",
        "present": "moet leeg zijn",
        "record_invalid": "Validatie mislukt: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Kan item niet verwijderen omdat afhankelijke %{record} bestaan",
          "one": "Kan item niet verwijderen omdat %{record} afhankelijk is"
        },
        "taken": "is al in gebruik",
        "too_long": {
          "one": "is te lang (maximaal %{count} teken)",
          "other": "is te lang (maximaal %{count} tekens)"
        },
        "too_short": {
          "one": "is te kort (minimaal %{count} teken)",
          "other": "is te kort (minimaal %{count} tekens)"
        },
        "wrong_length": {
          "one": "heeft onjuiste lengte (moet %{count} teken lang zijn)",
          "other": "heeft onjuiste lengte (moet %{count} tekens lang zijn)"
        }
      },
      "template": {
        "body": "Controleer de volgende velden:",
        "header": {
          "one": "%{model} niet opgeslagen: 1 fout gevonden",
          "other": "%{model} niet opgeslagen: %{count} fouten gevonden"
        }
      }
    },
    "failed": "failed",
    "feed_created": "Feed maken geslaagd.",
    "feed_updated": "Feed aanpassen geslaagd.",
    "feeds": {
      "active": "Active",
      "approved": "Approved",
      "browse_body": {
        "no_content_heading": "I'm afraid we're not in Kansas anymore.",
        "no_content_message": "There doesn't appear to be anything you can view on this Concerto network. You should ",
        "not_submittable": "Submissions not Allowed",
        "not_viewable": "Not Viewable",
        "sign_in": "Sign In",
        "sign_up": "Sign Up"
      },
      "browse_header": {
        "browse_content": "Browse Concerto Content"
      },
      "denied": "Denied",
      "expired": "Expired",
      "form": {
        "allowed_types": "Allowed types",
        "other_options": "Other Options",
        "prohibited_feed_save": "prevented this feed from being saved:",
        "provide_details": "Provide Details",
        "settings": "Settings"
      },
      "future": "Future",
      "moderate": {
        "contents_pending_moderation": "Contents Pending Moderation",
        "no_pending_content": "All good for now! None of the feeds you moderate have any pending contents.",
        "nothing_to_moderate": "Nothing to Moderate",
        "with_pending_content": "with pending content"
      },
      "no_availible_feeds": "There are no feeds in the system that you can submit content to.  Please contact your system administrator for more information.",
      "orphaned": "Orphaned",
      "pending": "Pending"
    },
    "field_configs": {
      "index": {
        "field": "field",
        "field_custom_configurations": "Custom Field Configs",
        "manage_model_for_field": "Manage %{model} for %{name} Field",
        "no_configuration_yet": "This field does not have any configuration.",
        "save_changes_to_model": "Save changes to %{model}"
      },
      "show": {
        "back": "Back",
        "edit": "Edit"
      }
    },
    "field_created": "Veld maken geslaagd.",
    "field_updated": "Veld aanpassen geslaagd.",
    "file_is_required": "file is required",
    "file_type_unsupported": "file is of type %{type}, which is not supported.",
    "frontend": {
      "screens": {
        "sign_in": {
          "coming_soon": "Coming Soon: Your New Screen.",
          "configure": "To configure this screen, you will need the following code:",
          "happy_advertising": "Happy Advertising!",
          "step_one": "Step One.",
          "step_one_message": "On your PC or mobile device, log into the\nConcerto Panel and visit the\nScreens page.\n",
          "step_three": "Step Three.",
          "step_three_details": "You can add some content to the screen by editing the\nsubscriptions\nin each field in the Concerto Panel.\n",
          "step_three_header": "Finally, take a look back at this screen. After a moment,\nyour template\nshould appear.\n",
          "step_two": "Step Two.",
          "step_two_details": "The screen should not be public. Use the code\ngiven above as the authorization\ncode. If this\nmachine is being reconfigured or is replacing an\nexisting screen, simply\nclick on that screen, click\nedit, ensure that the screen is not public, and enter\nthe\nauthorization code.\n",
          "step_two_header": "If this is a completely new screen, click\n\"New Screen\" and fill out\nthe relevant details.\n"
        }
      }
    },
    "gem_not_found": "is not a valid rubygem",
    "gems_frozen_warning": "Bundler has been run on Concerto using a frozen gem configuration—likely due to a deployment tool using the --deployment option for Bundler. In this setup, Concerto cannot automatically update the Gemfile with any plugins added/removed here nor install or update Concerto gems automatically.",
    "gemspec_not_found": "Gemspec not found in",
    "group_created": "Groep maken geslaagd.",
    "group_not_deletable": "A group owning screens and/or feeds cannot be deleted.",
    "group_updated": "Groep aanpassen geslaagd.",
    "groups": {
      "edit": {
        "change_group_memberships": "Change Group Memberships"
      },
      "form": {
        "initial_leader": "Initial Leader",
        "provide_details": "Provide Details"
      },
      "index": {
        "leader": "This person is a leader for this group."
      },
      "manage_members": {
        "add_member": "Add Member",
        "add_users_to_group": "Add Users to Group",
        "approve_requests": "Approve Requests",
        "demote_to_regular": "Demote to Regular",
        "feed_permission": {
          "name": "Feed Permission",
          "tooltip": "What you can change about the feeds owned by this group. You can change nothing, just moderate submissions, or everything (edit feed, moderate submissions)."
        },
        "leader": "Leader",
        "manage_members": "Manage Members",
        "manage_model": "Manage %{model}",
        "member": " member",
        "name": "Name",
        "no_pending_approvals": "No Pending Approvals",
        "no_regular_members": "This group currently has no regular members.",
        "permissions": {
          "all": "All",
          "none": "None",
          "submissions": "Submission",
          "subscriptions": "Subscriptions"
        },
        "promote_to_leader": "Promote To Leader",
        "remove_from_group": "Remove From Group",
        "request_made_at": "request_made_at",
        "screen_permission": {
          "name": "Screen Permission",
          "tooltip": "What you can change about the screens owned by this group. You can change nothing, just the subscriptions, or everything (edit screen, change template, and subscriptions)."
        },
        "update_permissions": "Update Permissions"
      },
      "show_body": {
        "edit_group": "Edit Group",
        "feed_header": {
          "one": "Moderates one Feed",
          "other": "Moderates %{count} Feeds"
        },
        "group_description": "Group Description",
        "group_has_no_leaders": "This group currently has no leaders.  You should promote a regular member in the table above.",
        "group_leaders": "Group Leaders",
        "join_group": "join_group",
        "leader": "Leader",
        "leave_group": "leave group",
        "member": " member",
        "member_header": {
          "one": "Contains one Member",
          "other": "Contains %{count} Members"
        },
        "no_pending_approvals": "No Pending Approvals!",
        "not_in_group": "You are not currently in this group.",
        "previously_denied_members": "Previously Denied Members",
        "promote_to_leader": "Promote to Leader",
        "regular_members": "Regular Members",
        "remove_from_group": "Remove from Group",
        "request_made_at": "Request Made At",
        "screen_header": {
          "one": "Manages one Screen",
          "other": "Manages %{count} Screen"
        },
        "your_membership_role": "You are currently a %{level}%{what} of this group."
      },
      "show_header": {
        "group_cannot_be_deleted": "Group cannot be deleted",
        "manage_members": "Manage Members"
      }
    },
    "helpers": {
      "label": {
        "feed": {
          "description": "Description",
          "group": "Group",
          "is_submittable": "Is submittable",
          "is_viewable": "Is viewable",
          "name": "Name",
          "parent": "Parent"
        },
        "graphic": {
          "name": "Name",
          "submit": "Submit"
        },
        "template": {
          "author": "Author",
          "is_hidden": "Hide this template from being shown in lists",
          "media": "Background Image/CSS",
          "name": "Name",
          "owner": "Owner"
        },
        "user": {
          "email": "Email",
          "first_name": "Name",
          "locale": "locale",
          "password": "Password",
          "password_confirmation": "Confirm Password",
          "receive_moderation_notifications": "Receive Moderation Notifications",
          "time_zone": "Time Zone"
        }
      },
      "page_entries_info": {
        "more_pages": {
          "display_entries": "%{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> van de <b>%{total}</b> getoond"
        },
        "one_page": {
          "display_entries": {
            "one": "<b>%{count}</b> %{entry_name} getoond",
            "other": "Alle <b>%{count}</b> %{entry_name} getoond"
          }
        }
      },
      "select": {
        "prompt": "Selecteer"
      },
      "submit": {
        "create": "%{model} toevoegen",
        "submit": "%{model} opslaan",
        "update": "%{model} bewaren"
      }
    },
    "import_model": "%{model} importeren",
    "join": "Deelnemen",
    "js": {
      "confirmbox": {
        "cancel": "Cancel",
        "ok": "OK",
        "title": "Concerto"
      },
      "duration": {
        "second": {
          "one": "%{count}s",
          "other": "%{count}s"
        }
      }
    },
    "kind_created": "Kind was successfully created.",
    "kind_updated": "Kind was successfully updated.",
    "layouts": {
      "errors": {
        "prohibited_save": {
          "concerto_plugin": {
            "one": "1 error prevented this plugin from being saved:",
            "other": "%{count} errors prevented this plugin from being saved:"
          },
          "feed": {
            "one": "1 error prevented this feed from being saved:",
            "other": "%{count} errors prevented this feed from being saved:"
          },
          "field_config": {
            "one": "1 error prevented this field config from being saved:",
            "other": "%{count} errors prevented this field config from being saved:"
          },
          "generic": {
            "one": "1 error prevented this %{model} from being saved:",
            "other": "%{count} errors prevented this %{model} from being saved:"
          },
          "graphic": {
            "one": "1 error prevented this graphic from being saved:",
            "other": "%{count} errors prevented this graphic from being saved:"
          },
          "group": {
            "one": "1 error prevented this group from being saved:",
            "other": "%{count} errors prevented this group from being saved:"
          },
          "kind": {
            "one": "1 error prevented this kind from being saved:",
            "other": "%{count} errors prevented this kind from being saved:"
          },
          "page": {
            "one": "1 error prevented this page from being saved:",
            "other": "%{count} errors prevented this page from being saved:"
          },
          "screen": {
            "one": "1 error prevented this screen from being saved:",
            "other": "%{count} errors prevented this screen from being saved:"
          },
          "subscription": {
            "one": "1 error prevented this subscription from being saved:",
            "other": "%{count} errors prevented this subscription from being saved:"
          },
          "template": {
            "one": "1 error prevented this template from being saved:",
            "other": "%{count} errors prevented this template from being saved:"
          },
          "ticker": {
            "one": "1 error prevented this text from being saved:",
            "other": "%{count} errors prevented this text from being saved:"
          },
          "user": {
            "one": "1 error prevented this user from being saved:",
            "other": "%{count} errors prevented this user from being saved:"
          }
        }
      }
    },
    "manage_model": "%{model} beheren",
    "member_removed": "Lid verwijderd.",
    "membership_applied_for": "Membership in group is now pending",
    "membership_approved": "Lidmaatschap maken goedgekeurd.",
    "membership_approved_failure": "Lidmaatschap maken niet goedgekeurd.",
    "membership_created": "Lidmaatschap maken geslaagd.",
    "membership_demoted": "Lid degraderen van groepsleider geslaagd.",
    "membership_demoted_failure": "Lid degraderen van groepsleider niet geslaagd. Er moet op zijn minst een groepsleider zijn.",
    "membership_denied": "Lidmaatschap maken geweigerd.",
    "membership_denied_failure": "Lidmaatschap maken niet geweigerd.",
    "membership_promoted": "Lid promoveren tot groepsleider geslaagd.",
    "membership_promoted_failure": "Lid promoveren tot groepsleider niet geslaagd.",
    "membership_unknown_action": "Onbekende ledenactie.",
    "missing_default_type": "Missing Default Content Type",
    "moderator_mailer": {
      "items_pending": {
        "a_submission_is_pending_moderation": "A submission is pending moderation.",
        "concerto_submission_pending_approval": "Concerto Submission Pending Approval"
      }
    },
    "my_model": "Mijn %{model}",
    "name": "name",
    "new_model": "Nieuw %{model}",
    "no": "No",
    "number": {
      "currency": {
        "format": {
          "delimiter": ".",
          "format": "%u%n",
          "precision": 2,
          "separator": ",",
          "significant": false,
          "strip_insignificant_zeros": false,
          "unit": "€"
        }
      },
      "format": {
        "delimiter": ".",
        "precision": 2,
        "separator": ",",
        "significant": false,
        "strip_insignificant_zeros": false
      },
      "human": {
        "decimal_units": {
          "format": "%n %u",
          "units": {
            "billion": "miljard",
            "million": "miljoen",
            "quadrillion": "biljard",
            "thousand": "duizend",
            "trillion": "biljoen",
            "unit": ""
          }
        },
        "format": {
          "delimiter": "",
          "precision": 3,
          "significant": true,
          "strip_insignificant_zeros": true
        },
        "storage_units": {
          "format": "%n %u",
          "units": {
            "byte": {
              "one": "Byte",
              "other": "Bytes"
            },
            "gb": "GB",
            "kb": "KB",
            "mb": "MB",
            "tb": "TB"
          }
        }
      },
      "percentage": {
        "format": {
          "delimiter": "",
          "format": "%n%"
        }
      },
      "precision": {
        "format": {
          "delimiter": ""
        }
      }
    },
    "other_model": "Ander %{model}",
    "owns_templates": {
      "one": "Owns one Template",
      "other": "Owns %{count} Templates"
    },
    "parameter": {
      "one": "parameter",
      "other": "parameters"
    },
    "parameter_updated": "Parameter was successfully updated.",
    "pending": "Pending",
    "plugin_created": "Concerto plugin maken geslaagd.",
    "plugin_created_frozen_env": "The Concerto plugin was created, but Concerto is running in a frozen Bundler environment. The plugin must be added to the Gemfile and installed manually with bundler.",
    "plugin_creation_failed": "Concerto plugin maken niet geslaagd.",
    "plugin_removed": "Concerto plugin was successfully removed.",
    "plugin_removed_frozen_env": "The Concerto plugin was removed, but Concerto is running in a frozen Bundler environment. The plugin must be removed from the Gemfile and bundler re-run.",
    "plugin_updated": "Concerto plugin aanpassen geslaagd.",
    "plugin_updated_frozen_env": "The Concerto plugin was updated, but Concerto is running in a frozen Bundler environment. Bundler must be re-run.",
    "position_created": "Positie maken geslaagd.",
    "position_updated": "Positie aanpassen geslaagd.",
    "preferences_updated": "Email preferences have been updated.",
    "public_activity": {
      "a_group_which_no_longer_exists": "a no longer existing group",
      "a_member": "a member",
      "concerto_config": {
        "article": "the"
      },
      "concerto_plugin": {
        "article": "the"
      },
      "content": {
        "create": {
          "created_a_new_content": "%{owner} created a new content %{item}",
          "created_a_new_content_with_type": "%{owner} created a new content %{item} (%{content_type})"
        },
        "destroy": {
          "deleted_the_content": "%{owner} deleted the content %{item}",
          "deleted_the_content_with_type": "%{owner} deleted the content %{item} (%{content_type})"
        },
        "update": {
          "updated_the_content": "%{owner} updated the content %{item}",
          "updated_the_content_with_type": "%{owner} updated the content %{item} (%{content_type})"
        }
      },
      "create_the_model": "created the %{model}",
      "destroy_the_model": "deleted the %{model}",
      "feed": {
        "article": "the",
        "create": {
          "created_a_new_feed": "created a new feed"
        },
        "destroy": {
          "deleted_the_feed": "deleted the feed"
        }
      },
      "field_config": {
        "create": {
          "created_config_for_field_on_screen": "%{owner} created the config %{config} for field %{field} on screen %{screen}"
        },
        "destroy": {
          "deleted_config_for_field_on_screen": "%{owner} deleted the config %{config} for field %{field} on screen %{screen}"
        },
        "update": {
          "updated_config_for_field_on_screen": "%{owner} updated the config %{config} for field %{field} on screen %{screen}"
        }
      },
      "graphic": {
        "article": "the",
        "create": {
          "created_a_new_graphic": "created a new graphic"
        }
      },
      "group": {
        "article": "the",
        "create": {
          "created_a_new_group": "created a new group"
        },
        "destroy": {
          "deleted_the_group": "deleted the group"
        }
      },
      "import_the_model": "imported the %{model}",
      "membership": {
        "article": "the",
        "create": {
          "added_member_to_group": "%{owner} added %{member} to the %{group} group as a %{role}",
          "leader": "leader",
          "regular_member": "regular member"
        },
        "destroy": {
          "removed_member_from_group": "%{owner} removed %{member} from the %{group} group"
        }
      },
      "screen": {
        "article": "the",
        "create": {
          "created_a_new_screen": "created a new screen"
        },
        "destroy": {
          "deleted_the_screen": "deleted the screen"
        }
      },
      "setting": "setting",
      "submission": {
        "article": "the",
        "update": {
          "approved_content_for_feed": "%{owner} approved %{content} for feed %{feed}",
          "denied_content_for_feed": "%{owner} denied %{content} for feed %{feed}"
        }
      },
      "unknown_user": "An unknown user",
      "update_the_model": "updated the %{model}",
      "user": {
        "article": "the",
        "create": {
          "added_a_new_user": "added as new user",
          "registered": "registered"
        }
      },
      "which_has_since_been_removed": "which has since been removed"
    },
    "rejected": "Rejected",
    "remove_model": "%{model} verwijderen",
    "restart_alert": "A new plugin has been added.  Please restart the concerto application.",
    "screen_created": "Scherm maken geslaagd.",
    "screen_updated": "Scherm aanpassen geslaagd.",
    "screens": {
      "feeds": {
        "filter_for_feed": "Filter for Feed",
        "select_feed": "Select Feed"
      },
      "form": {
        "auth_action": "Authentication Action",
        "authentication": "Authentication",
        "connection_details": "Connection Details",
        "dimensions": "Dimensions",
        "existing_mac": "Use existing legacy MAC address",
        "new_token": "Secure with a new token",
        "new_token_override": "Remove existing authentication and secure with a new token",
        "no_auth": "None (Unsecured)",
        "private_token": "Secured by an existing private token",
        "provide_details": "Provide Details"
      },
      "index": {
        "common_templates": "Common Templates",
        "view_all": "View All"
      },
      "index_body": {
        "add_one": "Why not add one?",
        "my_screens": "My Screens",
        "no_screens": "Oops - there are no screens to display.",
        "other_screens": "Other Screens",
        "to_add": " to add one"
      },
      "screen_info": {
        "mac_address": "MAC Add ress: %{mac}",
        "offline": "Offline",
        "online": "Online"
      },
      "show_body": {
        "field": "%{name} Field",
        "field_settings": {
          "one": "veld instelling",
          "other": "veldinstellingen"
        },
        "manage": "Manage",
        "preview_screen": "Preview Screen",
        "view_field_settings": "Hover over a field below to view its settings."
      },
      "template_selection": {
        "best_fit_templates": "Best-Fit Templates",
        "select_template": "Select Template"
      },
      "thumbs": {
        "owner": "owner"
      }
    },
    "settings_saved": "Concerto-instellingen opgeslagen.",
    "show": "Tonen",
    "smtp_send_error": "A SMTP error occurred while sending a notification e-mail. Please check the Concerto SMTP settings.",
    "smtp_send_error_ssl": "A SMTP error occurred while sending a notification e-mail. Please check the Concerto SMTP settings-- you might need to disable SSL Verification.",
    "sorry_access": "Sorry, you don't have access to perform this action.",
    "status": "Status",
    "submissions": {
      "approval_info": {
        "approved": "Approved",
        "display_from": "Display From:",
        "display_until": "Display Until:",
        "duration": "Duration:",
        "edit_duration": "Edit duration",
        "moderated_by": "By: %{moderator}",
        "seconds": "seconds",
        "submitted_by": "Submitted By",
        "the_dawn_of_time": "The Dawn of Time.",
        "the_end_of_time": "The End of Time."
      },
      "index_body": {
        "click_to_jump": "Click on a feed to jump",
        "items_in_state": {
          "active": {
            "one": "%{count} active item",
            "other": "%{count} active items"
          },
          "denied": {
            "one": "%{count} denied item",
            "other": "%{count} denied items"
          },
          "expired": {
            "one": "%{count} expired item",
            "other": "%{count} expired items"
          },
          "future": {
            "one": "%{count} future item",
            "other": "%{count} future items"
          },
          "generic": {
            "one": "%{count} %{state} item",
            "other": "%{count} %{state} items"
          }
        },
        "jump_to_feed": "Jump to Feed...",
        "moderated_by": "Moderated By",
        "no_state_content": {
          "active": "No active content",
          "denied": "No denied content",
          "expired": "No expired content",
          "future": "No future content",
          "generic": "No %{state} content"
        },
        "no_sub_feeds": "No Sub-feeds",
        "sub_feeds": "Sub-feeds:",
        "submissions_pending": {
          "one": "%{count} item pending your moderation",
          "other": "%{count} items pending your moderation"
        },
        "submit_something": "submit something",
        "subscribed_to_screens": "Subscribed to Screens",
        "to_make_this_feed_happy": "to make this feed a happier place?",
        "toggle_content_states_to_display": "Toggle content states to display...",
        "type_to_filter": "Type here to filter",
        "would_you_kindly": "Would you kindly"
      },
      "index_header": {
        "all_feeds": "All Feeds",
        "delete_feed": "Delete Feed",
        "edit_feed": "Edit Feed",
        "moderated_by": "This feed is moderated by"
      },
      "moderate_title": "Moderate %{name}",
      "show_body": {
        "also_appears_on": "Also submitted to...",
        "approve_this_content": "Approve this content",
        "approved": "Approved",
        "deny_this_content": "Deny this content"
      },
      "show_header": {
        "all_feeds": "All Feeds"
      },
      "submission_listgriditem": {
        "change_to_approved": "Change to Approved",
        "change_to_denied": "Change to Denied",
        "currently": "currently",
        "date_range": "%{start} to %{end}",
        "moderate": "Moderate...",
        "urgent": "Urgent",
        "urgent_tooltip": "Hey! This content has already passed its requested start date and you should moderate it."
      },
      "submission_tile": {
        "approve_this_content": "Approve this content",
        "deny_this_content": "Deny this content",
        "has_been_approved": "This content has been approved.",
        "has_been_denied": "This content has been denied."
      }
    },
    "subscription_created": "Inschrijving maken geslaagd.",
    "subscription_updated": "Inschrijving aanpassen geslaagd.",
    "subscriptions": {
      "approved_content": {
        "one": "%{count} approved item",
        "other": "%{count} approved items"
      },
      "index": {
        "add_a_new_feed": "Add A New Feed...",
        "field": "%{kind} field",
        "field_custom_configurations": "Custom Field Configurations",
        "make_changes": "First make some changes above to save.",
        "manage_model_for_field": "Manage %{model} for %{name} Field",
        "no_configuration_yet": "This field does not have any configuration.",
        "save_changes_to_model": "Save changes to %{model}",
        "search_and_find_a_feed_to_add": "Search and Find a Feed to Add",
        "subscriptions": "Subscriptions"
      },
      "records_created": "Subscriptions created",
      "records_updated": "Subscriptions have been saved for this field on your screen.",
      "show": {
        "back": "Back",
        "edit": "Edit",
        "feed": "Feed:",
        "field": "Field:",
        "screen": "Screen:",
        "weight": "Weight:"
      },
      "shown_frequently": "Frequently shown",
      "shown_rarely": "Rarely shown"
    },
    "support": {
      "array": {
        "last_word_connector": " en ",
        "two_words_connector": " en ",
        "words_connector": ", "
      }
    },
    "template_created": "Sjabloon maken geslaagd.",
    "template_import_error": "Fout bij importeren sjabloon. Zorg er voor dat dhet XML-bestand voor het sjabloon valide is.",
    "template_import_requires_files": "Importing a template requires an xml file and an image file.",
    "template_updated": "Sjabloon aanpassen geslaagd.",
    "templates": {
      "from_scratch": "Create from Scratch",
      "import_existing": "Import Existing",
      "import_form": {
        "descriptor": "Descriptor file",
        "image": "Image",
        "package": "Package"
      },
      "index_body": {
        "add_one": "add one",
        "author": "by",
        "no_templates_html": "Oops - there are no templates yet.  Why don't you %{href}?"
      },
      "new": {
        "invalid_xml": "The template descriptor file contains invalid XML",
        "template_import_requires_archive": "You need to specify an archive (ZIP) file that contains your template",
        "template_import_requires_image": "Your template package is missing a background image",
        "template_import_requires_xml": "Your template package is missing an xml descriptor",
        "template_import_requires_zip": "The selected file is not a ZIP file",
        "template_method": "Template method:",
        "template_type": "%{type} Template"
      },
      "show_body": {
        "author": "Author",
        "preview_alt": "%{name} Preview",
        "usage": "Used by the following screens:"
      },
      "show_header": {
        "delete_template": "Delete Template",
        "edit_template": "Edit Template"
      },
      "template": {
        "by": "by %{author}"
      }
    },
    "time": {
      "am": "'s ochtends",
      "formats": {
        "date": "%D",
        "date_long_year": "%d-%m-%Y",
        "date_time": "%D, %l:%M %p",
        "default": "%a %d %b %Y %H:%M:%S %Z",
        "long": "%d %B %Y %H:%M",
        "long_day": "%A %B %e at %l:%m %p",
        "month_day": "%m/%d",
        "short": "%d %b %H:%M",
        "short_date": "%a %D",
        "short_day": "%a %b %d %Y",
        "short_month": "%b %d",
        "time_date": "%I:%M %p on %D",
        "twelve_hour_time": "%I:%M %P"
      },
      "pm": "'s middags"
    },
    "unrecognized_type": "Unrecognized content type.",
    "update_model": "Update %{model}",
    "user_created": "Gebruiker maken geslaagd.",
    "user_not_created": "User not created",
    "user_not_deletable": "A user owning screens or who is the last remaining administrator cannot be deleted.",
    "user_owns_screens": "This user cannot be deleted because they own one or more screens.",
    "user_updated": "Gebruiker aanpassen geslaagd.",
    "users": {
      "all_users": "All Users",
      "change_password": "Change Password",
      "form": {
        "email_label": "user@domain.com",
        "first_label": "First",
        "last_label": "Last",
        "options": "Options",
        "provide_details": "Provide Details"
      },
      "index": {
        "denied": "Denied",
        "leader": "Leader",
        "moderator": "Moderator",
        "name": "Name",
        "pending": "Pending",
        "system_admin": "Admin"
      },
      "show_body": {
        "admin": "Admin",
        "content": "Content",
        "content_header": {
          "one": "Has Submitted one Item",
          "other": "Has Submitted %{count} Items"
        },
        "dont_receive_emails": "Don't receive emails",
        "forever": "forever",
        "group_header": {
          "one": "Belongs to one Group",
          "other": "Belongs to %{count} Groups"
        },
        "groups": "Groups",
        "leader": "User is a leader of one or more groups",
        "my": "My",
        "name": "Name",
        "receive_emails": "Receive emails",
        "roles": "Roles",
        "screen_header": {
          "one": "Manages one Screen",
          "other": "Manages %{count} Screens"
        },
        "screens": "Screens",
        "system_wide_admin": "This user is a system-wide admin",
        "this_is_you": "This is you."
      }
    },
    "valid_git": "is not a valid git repository",
    "views": {
      "pagination": {
        "first": "&laquo; Eerste",
        "last": "Laatste &raquo;",
        "next": "Volgende &rsaquo;",
        "previous": "&lsaquo; Vorige",
        "truncate": "&hellip;"
      }
    },
    "wont_write_restart_txt": "Concerto kan je webserver niet herstarten. Herstart manueel a.u.b.",
    "yes": "Yes"
  },
  "ru": {
    "i18n_tasks": {
      "add_missing": {
        "added": "Добавлены ключи (%{count})"
      },
      "cmd": {
        "args": {
          "default_text": "По умолчанию: %{value}",
          "desc": {
            "all_locales": "Не ожидать, что маски ключа начинаются с локали. Применять маски ко всем локалям.",
            "config": "Путь к файлу конфигурации",
            "confirm": "Подтвердить автоматом",
            "data_format": "Формат данных: %{valid_text}.",
            "keep_order": "Keep the order of the keys",
            "key_pattern": "Маска ключа (например, common.*)",
            "locale": "Язык. По умолчанию: base",
            "locale_to_translate_from": "Язык, с которого переводить (по умолчанию: base)",
            "locales_filter": "Список языков для обработки, разделенный запятыми (,). По умолчанию: все. Специальное значение: base.",
            "missing_types": "Типы недостающих переводов: %{valid}. По умолчанию: все",
            "nostdin": "Не читать дерево из стандартного ввода",
            "out_format": "Формат вывода: %{valid_text}.",
            "pattern_router": "Использовать pattern_router: ключи распределятся по файлам согласно data.write",
            "strict": "Не угадывать динамические использования ключей, например `t(\"category.#{category.key}\")`",
            "translation_backend": "Движок перевода (google или deepl)",
            "value": "Значение, интерполируется с %%{value}, %%{human_key}, %%{key}, %%{default}, %%{value_or_human_key}, %%{value_or_default_or_human_key}"
          }
        },
        "desc": {
          "add_missing": "добавить недостающие ключи к переводам",
          "check_consistent_interpolations": "убедитесь, что во всех переводах используются правильные интерполяционные переменные",
          "check_normalized": "проверить, что все файлы переводов нормализованы",
          "config": "показать конфигурацию",
          "cp": "скопируйте ключи в данных локали, соответствующие заданному шаблону",
          "data": "показать данные переводов",
          "data_merge": "добавить дерево к переводам",
          "data_remove": "удалить ключи, которые есть в дереве, из данных",
          "data_write": "заменить переводы деревом",
          "eq_base": "показать переводы, равные значениям в основном языке",
          "find": "показать, где ключи используются в коде",
          "gem_path": "показать путь к ruby gem",
          "health": "Всё ОК?",
          "irb": "начать REPL сессию в контексте i18n-tasks",
          "missing": "показать недостающие переводы",
          "mv": "переименовать / объединить ключи, которые соответствуют заданному шаблону",
          "normalize": "нормализовать файлы переводов (сортировка и распределение)",
          "remove_unused": "удалить неиспользуемые ключи",
          "rm": "удалить ключи, которые соответствуют заданному шаблону",
          "translate_missing": "перевести недостающие переводы с Google Translate / DeepL Pro",
          "tree_convert": "преобразовать дерево между форматами",
          "tree_filter": "фильтровать дерево по ключу",
          "tree_merge": "объединенить деревья",
          "tree_mv_key": "переименованить / объединить / удалить ключи соответствующие заданному шаблону",
          "tree_set_value": "заменить значения ключей",
          "tree_subtract": "дерево A минус ключи в дереве B",
          "tree_translate": "Перевести дерево при помощи Google Translate на язык корневых узлов",
          "unused": "показать неиспользуемые переводы"
        },
        "encourage": [
          "Хорошая работа!",
          "Отлично!",
          "Прекрасно!"
        ],
        "enum_list_opt": {
          "invalid": "%{invalid} не в: %{valid}."
        },
        "enum_opt": {
          "invalid": "%{invalid} не является одним из: %{valid}."
        },
        "errors": {
          "invalid_format": "Неизвестный формат %{invalid}. Форматы: %{valid}.",
          "invalid_locale": "Неверный язык %{invalid}",
          "invalid_missing_type": {
            "few": "Неизвестные типы: %{invalid}. Типы: %{valid}.",
            "many": "Неизвестные типы: %{invalid}. Типы: %{valid}.",
            "one": "Неизвестный тип %{invalid}. Типы: %{valid}.",
            "other": "Неизвестные типы: %{invalid}. Типы: %{valid}."
          },
          "pass_forest": "Передайте дерево"
        }
      },
      "common": {
        "continue_q": "Продолжить?",
        "key": "Ключ",
        "locale": "Язык",
        "n_more": "ещё %{count}",
        "value": "Значение"
      },
      "data_stats": {
        "text": "%{key_count} ключей в %{locale_count} языках. В среднем, длина строки: %{value_chars_avg}, сегменты ключей: %{key_segments_avg}, ключей в языке %{per_locale_avg}.",
        "text_single_locale": "%{key_count} ключей. В среднем, длина строки: %{value_chars_avg}, сегменты ключей: %{key_segments_avg}.",
        "title": "Данные (%{locales}):"
      },
      "deepl_translate": {
        "errors": {
          "no_api_key": "Задайте ключ API DeepL через переменную окружения DEEPL_AUTH_KEY или translation.deepl_api_key Получите ключ через https://www.deepl.com/pro.",
          "no_results": "DeepL не дал результатов.",
          "specific_target_missing": "You must supply a specific variant for the given target language e.g. en-us instead of en."
        }
      },
      "google_translate": {
        "errors": {
          "no_api_key": "Задайте ключ API Google через переменную окружения GOOGLE_TRANSLATE_API_KEY или translation.google_translate_api_key в config/i18n-tasks.yml. Получите ключ через https://code.google.com/apis/console.",
          "no_results": "Google Translate не дал результатов. Убедитесь в том, что платежная информация добавлена в https://code.google.com/apis/console."
        }
      },
      "health": {
        "no_keys_detected": "Ключи не обнаружены. Проверьте data.read в config/i18n-tasks.yml."
      },
      "inconsistent_interpolations": {
        "none": "Не найдено несогласованных интерполяций."
      },
      "missing": {
        "details_title": "На других языках или в коде",
        "none": "Всё переведено."
      },
      "openai_translate": {
        "errors": {
          "no_api_key": "Установить ключ API Яндекса с помощью переменной среды OPENAI_API_KEY или translation.openai_api_key\n в config / i18n-tasks.yml. Получите ключ по адресу https://openai.com/.",
          "no_results": "Яндекс не дал результатов."
        }
      },
      "remove_unused": {
        "confirm": {
          "few": "Переводы (%{count}) будут удалены из %{locales}.",
          "many": "Переводы (%{count}) будут удалены из %{locales}.",
          "one": "%{count} перевод будут удалён из %{locales}.",
          "other": "Переводы (%{count}) будут удалены из %{locales}."
        },
        "noop": "Нет неиспользуемых ключей",
        "removed": "Удалены ключи (%{count})"
      },
      "translate_missing": {
        "translated": "Переведены ключи (%{count})"
      },
      "unused": {
        "none": "Все переводы используются."
      },
      "usages": {
        "none": "Не найдено использований."
      },
      "yandex_translate": {
        "errors": {
          "no_api_key": "Установить ключ API Яндекса с помощью переменной среды YANDEX_API_KEY или translation.yandex_api_key\n в config / i18n-tasks.yml. Получите ключ по адресу https://tech.yandex.com/translate/.",
          "no_results": "Яндекс не дал результатов."
        }
      }
    }
  }
}