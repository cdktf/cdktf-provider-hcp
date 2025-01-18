# `vaultSecretsIntegration` Submodule <a name="`vaultSecretsIntegration` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegration <a name="VaultSecretsIntegration" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration hcp_vault_secrets_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

new vaultSecretsIntegration.VaultSecretsIntegration(scope: Construct, id: string, config: VaultSecretsIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig">VaultSecretsIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig">VaultSecretsIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsAccessKeys">putAwsAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsFederatedWorkloadIdentity">putAwsFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureClientSecret">putAzureClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureFederatedWorkloadIdentity">putAzureFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putConfluentStaticCredentials">putConfluentStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpFederatedWorkloadIdentity">putGcpFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpServiceAccountKey">putGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putMongodbAtlasStaticCredentials">putMongodbAtlasStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putTwilioStaticCredentials">putTwilioStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAwsAccessKeys">resetAwsAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAwsFederatedWorkloadIdentity">resetAwsFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAzureClientSecret">resetAzureClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAzureFederatedWorkloadIdentity">resetAzureFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetConfluentStaticCredentials">resetConfluentStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetGcpFederatedWorkloadIdentity">resetGcpFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetGcpServiceAccountKey">resetGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetMongodbAtlasStaticCredentials">resetMongodbAtlasStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetTwilioStaticCredentials">resetTwilioStaticCredentials</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsAccessKeys` <a name="putAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsAccessKeys"></a>

```typescript
public putAwsAccessKeys(value: VaultSecretsIntegrationAwsAccessKeys): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsAccessKeys.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

---

##### `putAwsFederatedWorkloadIdentity` <a name="putAwsFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsFederatedWorkloadIdentity"></a>

```typescript
public putAwsFederatedWorkloadIdentity(value: VaultSecretsIntegrationAwsFederatedWorkloadIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsFederatedWorkloadIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

---

##### `putAzureClientSecret` <a name="putAzureClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureClientSecret"></a>

```typescript
public putAzureClientSecret(value: VaultSecretsIntegrationAzureClientSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a>

---

##### `putAzureFederatedWorkloadIdentity` <a name="putAzureFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureFederatedWorkloadIdentity"></a>

```typescript
public putAzureFederatedWorkloadIdentity(value: VaultSecretsIntegrationAzureFederatedWorkloadIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureFederatedWorkloadIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a>

---

##### `putConfluentStaticCredentials` <a name="putConfluentStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putConfluentStaticCredentials"></a>

```typescript
public putConfluentStaticCredentials(value: VaultSecretsIntegrationConfluentStaticCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putConfluentStaticCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a>

---

##### `putGcpFederatedWorkloadIdentity` <a name="putGcpFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpFederatedWorkloadIdentity"></a>

```typescript
public putGcpFederatedWorkloadIdentity(value: VaultSecretsIntegrationGcpFederatedWorkloadIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpFederatedWorkloadIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>

---

##### `putGcpServiceAccountKey` <a name="putGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpServiceAccountKey"></a>

```typescript
public putGcpServiceAccountKey(value: VaultSecretsIntegrationGcpServiceAccountKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpServiceAccountKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>

---

##### `putMongodbAtlasStaticCredentials` <a name="putMongodbAtlasStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putMongodbAtlasStaticCredentials"></a>

```typescript
public putMongodbAtlasStaticCredentials(value: VaultSecretsIntegrationMongodbAtlasStaticCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putMongodbAtlasStaticCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a>

---

##### `putTwilioStaticCredentials` <a name="putTwilioStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putTwilioStaticCredentials"></a>

```typescript
public putTwilioStaticCredentials(value: VaultSecretsIntegrationTwilioStaticCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putTwilioStaticCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a>

---

##### `resetAwsAccessKeys` <a name="resetAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAwsAccessKeys"></a>

```typescript
public resetAwsAccessKeys(): void
```

##### `resetAwsFederatedWorkloadIdentity` <a name="resetAwsFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAwsFederatedWorkloadIdentity"></a>

```typescript
public resetAwsFederatedWorkloadIdentity(): void
```

##### `resetAzureClientSecret` <a name="resetAzureClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAzureClientSecret"></a>

```typescript
public resetAzureClientSecret(): void
```

##### `resetAzureFederatedWorkloadIdentity` <a name="resetAzureFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAzureFederatedWorkloadIdentity"></a>

```typescript
public resetAzureFederatedWorkloadIdentity(): void
```

##### `resetConfluentStaticCredentials` <a name="resetConfluentStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetConfluentStaticCredentials"></a>

```typescript
public resetConfluentStaticCredentials(): void
```

##### `resetGcpFederatedWorkloadIdentity` <a name="resetGcpFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetGcpFederatedWorkloadIdentity"></a>

```typescript
public resetGcpFederatedWorkloadIdentity(): void
```

##### `resetGcpServiceAccountKey` <a name="resetGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetGcpServiceAccountKey"></a>

```typescript
public resetGcpServiceAccountKey(): void
```

##### `resetMongodbAtlasStaticCredentials` <a name="resetMongodbAtlasStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetMongodbAtlasStaticCredentials"></a>

```typescript
public resetMongodbAtlasStaticCredentials(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTwilioStaticCredentials` <a name="resetTwilioStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetTwilioStaticCredentials"></a>

```typescript
public resetTwilioStaticCredentials(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isConstruct"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

vaultSecretsIntegration.VaultSecretsIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformElement"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

vaultSecretsIntegration.VaultSecretsIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformResource"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

vaultSecretsIntegration.VaultSecretsIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VaultSecretsIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultSecretsIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultSecretsIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsAccessKeys">awsAccessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference">VaultSecretsIntegrationAwsAccessKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsFederatedWorkloadIdentity">awsFederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureClientSecret">azureClientSecret</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference">VaultSecretsIntegrationAzureClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureFederatedWorkloadIdentity">azureFederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.confluentStaticCredentials">confluentStaticCredentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference">VaultSecretsIntegrationConfluentStaticCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpFederatedWorkloadIdentity">gcpFederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpServiceAccountKey">gcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference">VaultSecretsIntegrationGcpServiceAccountKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.mongodbAtlasStaticCredentials">mongodbAtlasStaticCredentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference">VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.twilioStaticCredentials">twilioStaticCredentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference">VaultSecretsIntegrationTwilioStaticCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsAccessKeysInput">awsAccessKeysInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsFederatedWorkloadIdentityInput">awsFederatedWorkloadIdentityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureClientSecretInput">azureClientSecretInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureFederatedWorkloadIdentityInput">azureFederatedWorkloadIdentityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.capabilitiesInput">capabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.confluentStaticCredentialsInput">confluentStaticCredentialsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpFederatedWorkloadIdentityInput">gcpFederatedWorkloadIdentityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpServiceAccountKeyInput">gcpServiceAccountKeyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.mongodbAtlasStaticCredentialsInput">mongodbAtlasStaticCredentialsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.providerTypeInput">providerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.twilioStaticCredentialsInput">twilioStaticCredentialsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.capabilities">capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.providerType">providerType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsAccessKeys`<sup>Required</sup> <a name="awsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsAccessKeys"></a>

```typescript
public readonly awsAccessKeys: VaultSecretsIntegrationAwsAccessKeysOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference">VaultSecretsIntegrationAwsAccessKeysOutputReference</a>

---

##### `awsFederatedWorkloadIdentity`<sup>Required</sup> <a name="awsFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsFederatedWorkloadIdentity"></a>

```typescript
public readonly awsFederatedWorkloadIdentity: VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference</a>

---

##### `azureClientSecret`<sup>Required</sup> <a name="azureClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureClientSecret"></a>

```typescript
public readonly azureClientSecret: VaultSecretsIntegrationAzureClientSecretOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference">VaultSecretsIntegrationAzureClientSecretOutputReference</a>

---

##### `azureFederatedWorkloadIdentity`<sup>Required</sup> <a name="azureFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureFederatedWorkloadIdentity"></a>

```typescript
public readonly azureFederatedWorkloadIdentity: VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference</a>

---

##### `confluentStaticCredentials`<sup>Required</sup> <a name="confluentStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.confluentStaticCredentials"></a>

```typescript
public readonly confluentStaticCredentials: VaultSecretsIntegrationConfluentStaticCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference">VaultSecretsIntegrationConfluentStaticCredentialsOutputReference</a>

---

##### `gcpFederatedWorkloadIdentity`<sup>Required</sup> <a name="gcpFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpFederatedWorkloadIdentity"></a>

```typescript
public readonly gcpFederatedWorkloadIdentity: VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference</a>

---

##### `gcpServiceAccountKey`<sup>Required</sup> <a name="gcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpServiceAccountKey"></a>

```typescript
public readonly gcpServiceAccountKey: VaultSecretsIntegrationGcpServiceAccountKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference">VaultSecretsIntegrationGcpServiceAccountKeyOutputReference</a>

---

##### `mongodbAtlasStaticCredentials`<sup>Required</sup> <a name="mongodbAtlasStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.mongodbAtlasStaticCredentials"></a>

```typescript
public readonly mongodbAtlasStaticCredentials: VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference">VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference</a>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `twilioStaticCredentials`<sup>Required</sup> <a name="twilioStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.twilioStaticCredentials"></a>

```typescript
public readonly twilioStaticCredentials: VaultSecretsIntegrationTwilioStaticCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference">VaultSecretsIntegrationTwilioStaticCredentialsOutputReference</a>

---

##### `awsAccessKeysInput`<sup>Optional</sup> <a name="awsAccessKeysInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsAccessKeysInput"></a>

```typescript
public readonly awsAccessKeysInput: IResolvable | VaultSecretsIntegrationAwsAccessKeys;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

---

##### `awsFederatedWorkloadIdentityInput`<sup>Optional</sup> <a name="awsFederatedWorkloadIdentityInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsFederatedWorkloadIdentityInput"></a>

```typescript
public readonly awsFederatedWorkloadIdentityInput: IResolvable | VaultSecretsIntegrationAwsFederatedWorkloadIdentity;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

---

##### `azureClientSecretInput`<sup>Optional</sup> <a name="azureClientSecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureClientSecretInput"></a>

```typescript
public readonly azureClientSecretInput: IResolvable | VaultSecretsIntegrationAzureClientSecret;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a>

---

##### `azureFederatedWorkloadIdentityInput`<sup>Optional</sup> <a name="azureFederatedWorkloadIdentityInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureFederatedWorkloadIdentityInput"></a>

```typescript
public readonly azureFederatedWorkloadIdentityInput: IResolvable | VaultSecretsIntegrationAzureFederatedWorkloadIdentity;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: string[];
```

- *Type:* string[]

---

##### `confluentStaticCredentialsInput`<sup>Optional</sup> <a name="confluentStaticCredentialsInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.confluentStaticCredentialsInput"></a>

```typescript
public readonly confluentStaticCredentialsInput: IResolvable | VaultSecretsIntegrationConfluentStaticCredentials;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a>

---

##### `gcpFederatedWorkloadIdentityInput`<sup>Optional</sup> <a name="gcpFederatedWorkloadIdentityInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpFederatedWorkloadIdentityInput"></a>

```typescript
public readonly gcpFederatedWorkloadIdentityInput: IResolvable | VaultSecretsIntegrationGcpFederatedWorkloadIdentity;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>

---

##### `gcpServiceAccountKeyInput`<sup>Optional</sup> <a name="gcpServiceAccountKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpServiceAccountKeyInput"></a>

```typescript
public readonly gcpServiceAccountKeyInput: IResolvable | VaultSecretsIntegrationGcpServiceAccountKey;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>

---

##### `mongodbAtlasStaticCredentialsInput`<sup>Optional</sup> <a name="mongodbAtlasStaticCredentialsInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.mongodbAtlasStaticCredentialsInput"></a>

```typescript
public readonly mongodbAtlasStaticCredentialsInput: IResolvable | VaultSecretsIntegrationMongodbAtlasStaticCredentials;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `providerTypeInput`<sup>Optional</sup> <a name="providerTypeInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.providerTypeInput"></a>

```typescript
public readonly providerTypeInput: string;
```

- *Type:* string

---

##### `twilioStaticCredentialsInput`<sup>Optional</sup> <a name="twilioStaticCredentialsInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.twilioStaticCredentialsInput"></a>

```typescript
public readonly twilioStaticCredentialsInput: IResolvable | VaultSecretsIntegrationTwilioStaticCredentials;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationAwsAccessKeys <a name="VaultSecretsIntegrationAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationAwsAccessKeys: vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | Key ID used with the secret key to authenticate against the target AWS account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | Secret key used with the key ID to authenticate against the target AWS account. |

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

Key ID used with the secret key to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#access_key_id VaultSecretsIntegration#access_key_id}

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

Secret key used with the key ID to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#secret_access_key VaultSecretsIntegration#secret_access_key}

---

### VaultSecretsIntegrationAwsFederatedWorkloadIdentity <a name="VaultSecretsIntegrationAwsFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationAwsFederatedWorkloadIdentity: vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.audience">audience</a></code> | <code>string</code> | Audience configured on the AWS IAM identity provider to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.roleArn">roleArn</a></code> | <code>string</code> | AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience configured on the AWS IAM identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#role_arn VaultSecretsIntegration#role_arn}

---

### VaultSecretsIntegrationAzureClientSecret <a name="VaultSecretsIntegrationAzureClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationAzureClientSecret: vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.clientId">clientId</a></code> | <code>string</code> | Azure client ID corresponding to the Azure application. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.clientSecret">clientSecret</a></code> | <code>string</code> | Secret value corresponding to the Azure client secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.tenantId">tenantId</a></code> | <code>string</code> | Azure tenant ID corresponding to the Azure application. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Azure client ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#client_id VaultSecretsIntegration#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Secret value corresponding to the Azure client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#client_secret VaultSecretsIntegration#client_secret}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Azure tenant ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#tenant_id VaultSecretsIntegration#tenant_id}

---

### VaultSecretsIntegrationAzureFederatedWorkloadIdentity <a name="VaultSecretsIntegrationAzureFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationAzureFederatedWorkloadIdentity: vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.audience">audience</a></code> | <code>string</code> | Audience configured on the Azure federated identity credentials to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.clientId">clientId</a></code> | <code>string</code> | Azure client ID corresponding to the Azure application. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.tenantId">tenantId</a></code> | <code>string</code> | Azure tenant ID corresponding to the Azure application. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience configured on the Azure federated identity credentials to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Azure client ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#client_id VaultSecretsIntegration#client_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Azure tenant ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#tenant_id VaultSecretsIntegration#tenant_id}

---

### VaultSecretsIntegrationConfig <a name="VaultSecretsIntegrationConfig" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationConfig: vaultSecretsIntegration.VaultSecretsIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.capabilities">capabilities</a></code> | <code>string[]</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.name">name</a></code> | <code>string</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.providerType">providerType</a></code> | <code>string</code> | The provider or 3rd party platform the integration is for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.awsAccessKeys">awsAccessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a></code> | AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.awsFederatedWorkloadIdentity">awsFederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.azureClientSecret">azureClientSecret</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a></code> | Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.azureFederatedWorkloadIdentity">azureFederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.confluentStaticCredentials">confluentStaticCredentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a></code> | Confluent API key used to authenticate for cloud apis. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.gcpFederatedWorkloadIdentity">gcpFederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.gcpServiceAccountKey">gcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a></code> | GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.mongodbAtlasStaticCredentials">mongodbAtlasStaticCredentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a></code> | MongoDB Atlas API key used to authenticate against the target project. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.projectId">projectId</a></code> | <code>string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.twilioStaticCredentials">twilioStaticCredentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a></code> | Twilio API key parts used to authenticate against the target Twilio account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#capabilities VaultSecretsIntegration#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#name VaultSecretsIntegration#name}

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

The provider or 3rd party platform the integration is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#provider_type VaultSecretsIntegration#provider_type}

---

##### `awsAccessKeys`<sup>Optional</sup> <a name="awsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.awsAccessKeys"></a>

```typescript
public readonly awsAccessKeys: VaultSecretsIntegrationAwsAccessKeys;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#aws_access_keys VaultSecretsIntegration#aws_access_keys}

---

##### `awsFederatedWorkloadIdentity`<sup>Optional</sup> <a name="awsFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.awsFederatedWorkloadIdentity"></a>

```typescript
public readonly awsFederatedWorkloadIdentity: VaultSecretsIntegrationAwsFederatedWorkloadIdentity;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#aws_federated_workload_identity VaultSecretsIntegration#aws_federated_workload_identity}

---

##### `azureClientSecret`<sup>Optional</sup> <a name="azureClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.azureClientSecret"></a>

```typescript
public readonly azureClientSecret: VaultSecretsIntegrationAzureClientSecret;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a>

Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#azure_client_secret VaultSecretsIntegration#azure_client_secret}

---

##### `azureFederatedWorkloadIdentity`<sup>Optional</sup> <a name="azureFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.azureFederatedWorkloadIdentity"></a>

```typescript
public readonly azureFederatedWorkloadIdentity: VaultSecretsIntegrationAzureFederatedWorkloadIdentity;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#azure_federated_workload_identity VaultSecretsIntegration#azure_federated_workload_identity}

---

##### `confluentStaticCredentials`<sup>Optional</sup> <a name="confluentStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.confluentStaticCredentials"></a>

```typescript
public readonly confluentStaticCredentials: VaultSecretsIntegrationConfluentStaticCredentials;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a>

Confluent API key used to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#confluent_static_credentials VaultSecretsIntegration#confluent_static_credentials}

---

##### `gcpFederatedWorkloadIdentity`<sup>Optional</sup> <a name="gcpFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.gcpFederatedWorkloadIdentity"></a>

```typescript
public readonly gcpFederatedWorkloadIdentity: VaultSecretsIntegrationGcpFederatedWorkloadIdentity;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#gcp_federated_workload_identity VaultSecretsIntegration#gcp_federated_workload_identity}

---

##### `gcpServiceAccountKey`<sup>Optional</sup> <a name="gcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.gcpServiceAccountKey"></a>

```typescript
public readonly gcpServiceAccountKey: VaultSecretsIntegrationGcpServiceAccountKey;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>

GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#gcp_service_account_key VaultSecretsIntegration#gcp_service_account_key}

---

##### `mongodbAtlasStaticCredentials`<sup>Optional</sup> <a name="mongodbAtlasStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.mongodbAtlasStaticCredentials"></a>

```typescript
public readonly mongodbAtlasStaticCredentials: VaultSecretsIntegrationMongodbAtlasStaticCredentials;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a>

MongoDB Atlas API key used to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#mongodb_atlas_static_credentials VaultSecretsIntegration#mongodb_atlas_static_credentials}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#project_id VaultSecretsIntegration#project_id}

---

##### `twilioStaticCredentials`<sup>Optional</sup> <a name="twilioStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.twilioStaticCredentials"></a>

```typescript
public readonly twilioStaticCredentials: VaultSecretsIntegrationTwilioStaticCredentials;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a>

Twilio API key parts used to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#twilio_static_credentials VaultSecretsIntegration#twilio_static_credentials}

---

### VaultSecretsIntegrationConfluentStaticCredentials <a name="VaultSecretsIntegrationConfluentStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationConfluentStaticCredentials: vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.property.cloudApiKeyId">cloudApiKeyId</a></code> | <code>string</code> | Public key used alongside the private key to authenticate for cloud apis. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.property.cloudApiSecret">cloudApiSecret</a></code> | <code>string</code> | Private key used alongside the public key to authenticate for cloud apis. |

---

##### `cloudApiKeyId`<sup>Required</sup> <a name="cloudApiKeyId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.property.cloudApiKeyId"></a>

```typescript
public readonly cloudApiKeyId: string;
```

- *Type:* string

Public key used alongside the private key to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#cloud_api_key_id VaultSecretsIntegration#cloud_api_key_id}

---

##### `cloudApiSecret`<sup>Required</sup> <a name="cloudApiSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.property.cloudApiSecret"></a>

```typescript
public readonly cloudApiSecret: string;
```

- *Type:* string

Private key used alongside the public key to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#cloud_api_secret VaultSecretsIntegration#cloud_api_secret}

---

### VaultSecretsIntegrationGcpFederatedWorkloadIdentity <a name="VaultSecretsIntegrationGcpFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationGcpFederatedWorkloadIdentity: vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.audience">audience</a></code> | <code>string</code> | Audience configured on the GCP identity provider to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | GCP service account email that HVS will impersonate to carry operations for the appropriate capabilities. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience configured on the GCP identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

GCP service account email that HVS will impersonate to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#service_account_email VaultSecretsIntegration#service_account_email}

---

### VaultSecretsIntegrationGcpServiceAccountKey <a name="VaultSecretsIntegrationGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationGcpServiceAccountKey: vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey.property.credentials">credentials</a></code> | <code>string</code> | JSON or base64 encoded service account key received from GCP. |

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

JSON or base64 encoded service account key received from GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#credentials VaultSecretsIntegration#credentials}

---

### VaultSecretsIntegrationMongodbAtlasStaticCredentials <a name="VaultSecretsIntegrationMongodbAtlasStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationMongodbAtlasStaticCredentials: vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.property.apiPrivateKey">apiPrivateKey</a></code> | <code>string</code> | Private key used alongside the public key to authenticate against the target project. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.property.apiPublicKey">apiPublicKey</a></code> | <code>string</code> | Public key used alongside the private key to authenticate against the target project. |

---

##### `apiPrivateKey`<sup>Required</sup> <a name="apiPrivateKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.property.apiPrivateKey"></a>

```typescript
public readonly apiPrivateKey: string;
```

- *Type:* string

Private key used alongside the public key to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#api_private_key VaultSecretsIntegration#api_private_key}

---

##### `apiPublicKey`<sup>Required</sup> <a name="apiPublicKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.property.apiPublicKey"></a>

```typescript
public readonly apiPublicKey: string;
```

- *Type:* string

Public key used alongside the private key to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#api_public_key VaultSecretsIntegration#api_public_key}

---

### VaultSecretsIntegrationTwilioStaticCredentials <a name="VaultSecretsIntegrationTwilioStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationTwilioStaticCredentials: vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.accountSid">accountSid</a></code> | <code>string</code> | Account SID for the target Twilio account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.apiKeySecret">apiKeySecret</a></code> | <code>string</code> | Api key secret used with the api key SID to authenticate against the target Twilio account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.apiKeySid">apiKeySid</a></code> | <code>string</code> | Api key SID to authenticate against the target Twilio account. |

---

##### `accountSid`<sup>Required</sup> <a name="accountSid" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.accountSid"></a>

```typescript
public readonly accountSid: string;
```

- *Type:* string

Account SID for the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#account_sid VaultSecretsIntegration#account_sid}

---

##### `apiKeySecret`<sup>Required</sup> <a name="apiKeySecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.apiKeySecret"></a>

```typescript
public readonly apiKeySecret: string;
```

- *Type:* string

Api key secret used with the api key SID to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#api_key_secret VaultSecretsIntegration#api_key_secret}

---

##### `apiKeySid`<sup>Required</sup> <a name="apiKeySid" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.apiKeySid"></a>

```typescript
public readonly apiKeySid: string;
```

- *Type:* string

Api key SID to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#api_key_sid VaultSecretsIntegration#api_key_sid}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationAwsAccessKeysOutputReference <a name="VaultSecretsIntegrationAwsAccessKeysOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

new vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationAwsAccessKeys;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

---


### VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference <a name="VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

new vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationAwsFederatedWorkloadIdentity;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

---


### VaultSecretsIntegrationAzureClientSecretOutputReference <a name="VaultSecretsIntegrationAzureClientSecretOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

new vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationAzureClientSecret;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a>

---


### VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference <a name="VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

new vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationAzureFederatedWorkloadIdentity;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a>

---


### VaultSecretsIntegrationConfluentStaticCredentialsOutputReference <a name="VaultSecretsIntegrationConfluentStaticCredentialsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

new vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiKeyIdInput">cloudApiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiSecretInput">cloudApiSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiKeyId">cloudApiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiSecret">cloudApiSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudApiKeyIdInput`<sup>Optional</sup> <a name="cloudApiKeyIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiKeyIdInput"></a>

```typescript
public readonly cloudApiKeyIdInput: string;
```

- *Type:* string

---

##### `cloudApiSecretInput`<sup>Optional</sup> <a name="cloudApiSecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiSecretInput"></a>

```typescript
public readonly cloudApiSecretInput: string;
```

- *Type:* string

---

##### `cloudApiKeyId`<sup>Required</sup> <a name="cloudApiKeyId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiKeyId"></a>

```typescript
public readonly cloudApiKeyId: string;
```

- *Type:* string

---

##### `cloudApiSecret`<sup>Required</sup> <a name="cloudApiSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiSecret"></a>

```typescript
public readonly cloudApiSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationConfluentStaticCredentials;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a>

---


### VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference <a name="VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

new vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationGcpFederatedWorkloadIdentity;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>

---


### VaultSecretsIntegrationGcpServiceAccountKeyOutputReference <a name="VaultSecretsIntegrationGcpServiceAccountKeyOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

new vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.clientEmail">clientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentialsInput">credentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentials">credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.clientEmail"></a>

```typescript
public readonly clientEmail: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationGcpServiceAccountKey;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>

---


### VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference <a name="VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

new vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPrivateKeyInput">apiPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPublicKeyInput">apiPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPrivateKey">apiPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPublicKey">apiPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiPrivateKeyInput`<sup>Optional</sup> <a name="apiPrivateKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPrivateKeyInput"></a>

```typescript
public readonly apiPrivateKeyInput: string;
```

- *Type:* string

---

##### `apiPublicKeyInput`<sup>Optional</sup> <a name="apiPublicKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPublicKeyInput"></a>

```typescript
public readonly apiPublicKeyInput: string;
```

- *Type:* string

---

##### `apiPrivateKey`<sup>Required</sup> <a name="apiPrivateKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPrivateKey"></a>

```typescript
public readonly apiPrivateKey: string;
```

- *Type:* string

---

##### `apiPublicKey`<sup>Required</sup> <a name="apiPublicKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPublicKey"></a>

```typescript
public readonly apiPublicKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationMongodbAtlasStaticCredentials;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a>

---


### VaultSecretsIntegrationTwilioStaticCredentialsOutputReference <a name="VaultSecretsIntegrationTwilioStaticCredentialsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegration } from '@cdktf/provider-hcp'

new vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.accountSidInput">accountSidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySecretInput">apiKeySecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySidInput">apiKeySidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.accountSid">accountSid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySecret">apiKeySecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySid">apiKeySid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountSidInput`<sup>Optional</sup> <a name="accountSidInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.accountSidInput"></a>

```typescript
public readonly accountSidInput: string;
```

- *Type:* string

---

##### `apiKeySecretInput`<sup>Optional</sup> <a name="apiKeySecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySecretInput"></a>

```typescript
public readonly apiKeySecretInput: string;
```

- *Type:* string

---

##### `apiKeySidInput`<sup>Optional</sup> <a name="apiKeySidInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySidInput"></a>

```typescript
public readonly apiKeySidInput: string;
```

- *Type:* string

---

##### `accountSid`<sup>Required</sup> <a name="accountSid" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.accountSid"></a>

```typescript
public readonly accountSid: string;
```

- *Type:* string

---

##### `apiKeySecret`<sup>Required</sup> <a name="apiKeySecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySecret"></a>

```typescript
public readonly apiKeySecret: string;
```

- *Type:* string

---

##### `apiKeySid`<sup>Required</sup> <a name="apiKeySid" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySid"></a>

```typescript
public readonly apiKeySid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationTwilioStaticCredentials;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a>

---



