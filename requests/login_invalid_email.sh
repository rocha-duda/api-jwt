#!/bin/bash
echo "=== TESTE: Login com E-MAIL NÃO CADASTRADO ==="
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email": "naoexiste@email.com", "password": "Senha@123"}'
echo ""s