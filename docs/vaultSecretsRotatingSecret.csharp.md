# `vaultSecretsRotatingSecret` Submodule <a name="`vaultSecretsRotatingSecret` Submodule" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsRotatingSecret <a name="VaultSecretsRotatingSecret" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret hcp_vault_secrets_rotating_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsRotatingSecret(Construct Scope, string Id, VaultSecretsRotatingSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig">VaultSecretsRotatingSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig">VaultSecretsRotatingSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAwsAccessKeys">PutAwsAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putGcpServiceAccountKey">PutGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putMongodbAtlasUser">PutMongodbAtlasUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putTwilioApiKey">PutTwilioApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetAwsAccessKeys">ResetAwsAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetGcpServiceAccountKey">ResetGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetMongodbAtlasUser">ResetMongodbAtlasUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetTwilioApiKey">ResetTwilioApiKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsAccessKeys` <a name="PutAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAwsAccessKeys"></a>

```csharp
private void PutAwsAccessKeys(VaultSecretsRotatingSecretAwsAccessKeys Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putAwsAccessKeys.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a>

---

##### `PutGcpServiceAccountKey` <a name="PutGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putGcpServiceAccountKey"></a>

```csharp
private void PutGcpServiceAccountKey(VaultSecretsRotatingSecretGcpServiceAccountKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putGcpServiceAccountKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a>

---

##### `PutMongodbAtlasUser` <a name="PutMongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putMongodbAtlasUser"></a>

```csharp
private void PutMongodbAtlasUser(VaultSecretsRotatingSecretMongodbAtlasUser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putMongodbAtlasUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a>

---

##### `PutTwilioApiKey` <a name="PutTwilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putTwilioApiKey"></a>

```csharp
private void PutTwilioApiKey(VaultSecretsRotatingSecretTwilioApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.putTwilioApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a>

---

##### `ResetAwsAccessKeys` <a name="ResetAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetAwsAccessKeys"></a>

```csharp
private void ResetAwsAccessKeys()
```

##### `ResetGcpServiceAccountKey` <a name="ResetGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetGcpServiceAccountKey"></a>

```csharp
private void ResetGcpServiceAccountKey()
```

##### `ResetMongodbAtlasUser` <a name="ResetMongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetMongodbAtlasUser"></a>

```csharp
private void ResetMongodbAtlasUser()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetTwilioApiKey` <a name="ResetTwilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.resetTwilioApiKey"></a>

```csharp
private void ResetTwilioApiKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsRotatingSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultSecretsRotatingSecret.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultSecretsRotatingSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultSecretsRotatingSecret.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultSecretsRotatingSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VaultSecretsRotatingSecret resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultSecretsRotatingSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultSecretsRotatingSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsRotatingSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeys">AwsAccessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference">VaultSecretsRotatingSecretAwsAccessKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKey">GcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference">VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUser">MongodbAtlasUser</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference">VaultSecretsRotatingSecretMongodbAtlasUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKey">TwilioApiKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference">VaultSecretsRotatingSecretTwilioApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appNameInput">AppNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeysInput">AwsAccessKeysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKeyInput">GcpServiceAccountKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationNameInput">IntegrationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUserInput">MongodbAtlasUserInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyNameInput">RotationPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProviderInput">SecretProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKeyInput">TwilioApiKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appName">AppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationName">IntegrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyName">RotationPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProvider">SecretProvider</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AwsAccessKeys`<sup>Required</sup> <a name="AwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeys"></a>

```csharp
public VaultSecretsRotatingSecretAwsAccessKeysOutputReference AwsAccessKeys { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference">VaultSecretsRotatingSecretAwsAccessKeysOutputReference</a>

---

##### `GcpServiceAccountKey`<sup>Required</sup> <a name="GcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKey"></a>

```csharp
public VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference GcpServiceAccountKey { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference">VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference</a>

---

##### `MongodbAtlasUser`<sup>Required</sup> <a name="MongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUser"></a>

```csharp
public VaultSecretsRotatingSecretMongodbAtlasUserOutputReference MongodbAtlasUser { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference">VaultSecretsRotatingSecretMongodbAtlasUserOutputReference</a>

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `TwilioApiKey`<sup>Required</sup> <a name="TwilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKey"></a>

```csharp
public VaultSecretsRotatingSecretTwilioApiKeyOutputReference TwilioApiKey { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference">VaultSecretsRotatingSecretTwilioApiKeyOutputReference</a>

---

##### `AppNameInput`<sup>Optional</sup> <a name="AppNameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appNameInput"></a>

```csharp
public string AppNameInput { get; }
```

- *Type:* string

---

##### `AwsAccessKeysInput`<sup>Optional</sup> <a name="AwsAccessKeysInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.awsAccessKeysInput"></a>

```csharp
public object AwsAccessKeysInput { get; }
```

- *Type:* object

---

##### `GcpServiceAccountKeyInput`<sup>Optional</sup> <a name="GcpServiceAccountKeyInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.gcpServiceAccountKeyInput"></a>

```csharp
public object GcpServiceAccountKeyInput { get; }
```

- *Type:* object

---

##### `IntegrationNameInput`<sup>Optional</sup> <a name="IntegrationNameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationNameInput"></a>

```csharp
public string IntegrationNameInput { get; }
```

- *Type:* string

---

##### `MongodbAtlasUserInput`<sup>Optional</sup> <a name="MongodbAtlasUserInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.mongodbAtlasUserInput"></a>

```csharp
public object MongodbAtlasUserInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RotationPolicyNameInput`<sup>Optional</sup> <a name="RotationPolicyNameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyNameInput"></a>

```csharp
public string RotationPolicyNameInput { get; }
```

- *Type:* string

---

##### `SecretProviderInput`<sup>Optional</sup> <a name="SecretProviderInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProviderInput"></a>

```csharp
public string SecretProviderInput { get; }
```

- *Type:* string

---

##### `TwilioApiKeyInput`<sup>Optional</sup> <a name="TwilioApiKeyInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.twilioApiKeyInput"></a>

```csharp
public object TwilioApiKeyInput { get; }
```

- *Type:* object

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.appName"></a>

```csharp
public string AppName { get; }
```

- *Type:* string

---

##### `IntegrationName`<sup>Required</sup> <a name="IntegrationName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.integrationName"></a>

```csharp
public string IntegrationName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RotationPolicyName`<sup>Required</sup> <a name="RotationPolicyName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.rotationPolicyName"></a>

```csharp
public string RotationPolicyName { get; }
```

- *Type:* string

---

##### `SecretProvider`<sup>Required</sup> <a name="SecretProvider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.secretProvider"></a>

```csharp
public string SecretProvider { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsRotatingSecretAwsAccessKeys <a name="VaultSecretsRotatingSecretAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsRotatingSecretAwsAccessKeys {
    string IamUsername
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys.property.iamUsername">IamUsername</a></code> | <code>string</code> | AWS IAM username to rotate the access keys for. |

---

##### `IamUsername`<sup>Required</sup> <a name="IamUsername" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys.property.iamUsername"></a>

```csharp
public string IamUsername { get; set; }
```

- *Type:* string

AWS IAM username to rotate the access keys for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#iam_username VaultSecretsRotatingSecret#iam_username}

---

### VaultSecretsRotatingSecretConfig <a name="VaultSecretsRotatingSecretConfig" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsRotatingSecretConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppName,
    string IntegrationName,
    string Name,
    string RotationPolicyName,
    string SecretProvider,
    VaultSecretsRotatingSecretAwsAccessKeys AwsAccessKeys = null,
    VaultSecretsRotatingSecretGcpServiceAccountKey GcpServiceAccountKey = null,
    VaultSecretsRotatingSecretMongodbAtlasUser MongodbAtlasUser = null,
    string ProjectId = null,
    VaultSecretsRotatingSecretTwilioApiKey TwilioApiKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.appName">AppName</a></code> | <code>string</code> | Vault Secrets application name that owns the secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.integrationName">IntegrationName</a></code> | <code>string</code> | The Vault Secrets integration name with the capability to manage the secret's lifecycle. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.name">Name</a></code> | <code>string</code> | The Vault Secrets secret name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.rotationPolicyName">RotationPolicyName</a></code> | <code>string</code> | Name of the rotation policy that governs the rotation of the secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.secretProvider">SecretProvider</a></code> | <code>string</code> | The third party platform the dynamic credentials give access to. One of `aws` or `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.awsAccessKeys">AwsAccessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a></code> | AWS configuration to manage the access key rotation for the given IAM user. Required if `secret_provider` is `aws`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.gcpServiceAccountKey">GcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a></code> | GCP configuration to manage the service account key rotation for the given service account. Required if `secret_provider` is `gcp`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.mongodbAtlasUser">MongodbAtlasUser</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a></code> | MongoDB Atlas configuration to manage the user password rotation on the given database. Required if `secret_provider` is `mongodb_atlas`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.projectId">ProjectId</a></code> | <code>string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.twilioApiKey">TwilioApiKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a></code> | Twilio configuration to manage the api key rotation on the given account. Required if `secret_provider` is `twilio`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.appName"></a>

```csharp
public string AppName { get; set; }
```

- *Type:* string

Vault Secrets application name that owns the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#app_name VaultSecretsRotatingSecret#app_name}

---

##### `IntegrationName`<sup>Required</sup> <a name="IntegrationName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.integrationName"></a>

```csharp
public string IntegrationName { get; set; }
```

- *Type:* string

The Vault Secrets integration name with the capability to manage the secret's lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#integration_name VaultSecretsRotatingSecret#integration_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The Vault Secrets secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#name VaultSecretsRotatingSecret#name}

---

##### `RotationPolicyName`<sup>Required</sup> <a name="RotationPolicyName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.rotationPolicyName"></a>

```csharp
public string RotationPolicyName { get; set; }
```

- *Type:* string

Name of the rotation policy that governs the rotation of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#rotation_policy_name VaultSecretsRotatingSecret#rotation_policy_name}

---

##### `SecretProvider`<sup>Required</sup> <a name="SecretProvider" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.secretProvider"></a>

```csharp
public string SecretProvider { get; set; }
```

- *Type:* string

The third party platform the dynamic credentials give access to. One of `aws` or `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#secret_provider VaultSecretsRotatingSecret#secret_provider}

---

##### `AwsAccessKeys`<sup>Optional</sup> <a name="AwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.awsAccessKeys"></a>

```csharp
public VaultSecretsRotatingSecretAwsAccessKeys AwsAccessKeys { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeys">VaultSecretsRotatingSecretAwsAccessKeys</a>

AWS configuration to manage the access key rotation for the given IAM user. Required if `secret_provider` is `aws`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#aws_access_keys VaultSecretsRotatingSecret#aws_access_keys}

---

##### `GcpServiceAccountKey`<sup>Optional</sup> <a name="GcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.gcpServiceAccountKey"></a>

```csharp
public VaultSecretsRotatingSecretGcpServiceAccountKey GcpServiceAccountKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey">VaultSecretsRotatingSecretGcpServiceAccountKey</a>

GCP configuration to manage the service account key rotation for the given service account. Required if `secret_provider` is `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#gcp_service_account_key VaultSecretsRotatingSecret#gcp_service_account_key}

---

##### `MongodbAtlasUser`<sup>Optional</sup> <a name="MongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.mongodbAtlasUser"></a>

```csharp
public VaultSecretsRotatingSecretMongodbAtlasUser MongodbAtlasUser { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser">VaultSecretsRotatingSecretMongodbAtlasUser</a>

MongoDB Atlas configuration to manage the user password rotation on the given database. Required if `secret_provider` is `mongodb_atlas`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#mongodb_atlas_user VaultSecretsRotatingSecret#mongodb_atlas_user}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#project_id VaultSecretsRotatingSecret#project_id}

---

##### `TwilioApiKey`<sup>Optional</sup> <a name="TwilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretConfig.property.twilioApiKey"></a>

```csharp
public VaultSecretsRotatingSecretTwilioApiKey TwilioApiKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey">VaultSecretsRotatingSecretTwilioApiKey</a>

Twilio configuration to manage the api key rotation on the given account. Required if `secret_provider` is `twilio`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#twilio_api_key VaultSecretsRotatingSecret#twilio_api_key}

---

### VaultSecretsRotatingSecretGcpServiceAccountKey <a name="VaultSecretsRotatingSecretGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsRotatingSecretGcpServiceAccountKey {
    string ServiceAccountEmail
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | GCP service account email to impersonate. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKey.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

GCP service account email to impersonate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#service_account_email VaultSecretsRotatingSecret#service_account_email}

---

### VaultSecretsRotatingSecretMongodbAtlasUser <a name="VaultSecretsRotatingSecretMongodbAtlasUser" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsRotatingSecretMongodbAtlasUser {
    string DatabaseName,
    string ProjectId,
    string[] Roles
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.databaseName">DatabaseName</a></code> | <code>string</code> | MongoDB Atlas database or cluster name to rotate the username and password for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.projectId">ProjectId</a></code> | <code>string</code> | MongoDB Atlas project ID to rotate the username and password for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.roles">Roles</a></code> | <code>string[]</code> | MongoDB Atlas roles to assign to the rotating user. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

MongoDB Atlas database or cluster name to rotate the username and password for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#database_name VaultSecretsRotatingSecret#database_name}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

MongoDB Atlas project ID to rotate the username and password for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#project_id VaultSecretsRotatingSecret#project_id}

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUser.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

MongoDB Atlas roles to assign to the rotating user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/vault_secrets_rotating_secret#roles VaultSecretsRotatingSecret#roles}

---

### VaultSecretsRotatingSecretTwilioApiKey <a name="VaultSecretsRotatingSecretTwilioApiKey" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsRotatingSecretTwilioApiKey {

};
```


## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsRotatingSecretAwsAccessKeysOutputReference <a name="VaultSecretsRotatingSecretAwsAccessKeysOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsRotatingSecretAwsAccessKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsernameInput">IamUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsername">IamUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IamUsernameInput`<sup>Optional</sup> <a name="IamUsernameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsernameInput"></a>

```csharp
public string IamUsernameInput { get; }
```

- *Type:* string

---

##### `IamUsername`<sup>Required</sup> <a name="IamUsername" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.iamUsername"></a>

```csharp
public string IamUsername { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretAwsAccessKeysOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference <a name="VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultSecretsRotatingSecretMongodbAtlasUserOutputReference <a name="VaultSecretsRotatingSecretMongodbAtlasUserOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsRotatingSecretMongodbAtlasUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretMongodbAtlasUserOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultSecretsRotatingSecretTwilioApiKeyOutputReference <a name="VaultSecretsRotatingSecretTwilioApiKeyOutputReference" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsRotatingSecretTwilioApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsRotatingSecret.VaultSecretsRotatingSecretTwilioApiKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



